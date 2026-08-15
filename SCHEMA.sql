-- NestFlex Comprehensive Database Schema Reset
-- Target: Supabase SQL Editor
-- This script ensures all tables, policies, and indexes match the 92449ec specification.

-- 1. Core Product & Brochure Tables
CREATE TABLE IF NOT EXISTS products (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  "Title" TEXT NOT NULL,
  "Price" TEXT,
  "Category" TEXT,
  "ImageURL" TEXT,
  description TEXT,
  matterport_url TEXT,
  video_url TEXT
);

CREATE TABLE IF NOT EXISTS brochures (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  product_id BIGINT REFERENCES products(id) ON DELETE CASCADE,
  file_url TEXT NOT NULL
);

-- 2. Media & Plans Tables
CREATE TABLE IF NOT EXISTS product_images (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  product_id BIGINT REFERENCES products(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  display_order INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS product_plans (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  product_id BIGINT REFERENCES products(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  display_order INT DEFAULT 0
);

-- 3. Lead Capture Table
CREATE TABLE IF NOT EXISTS leads (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  city TEXT,
  suburb TEXT,
  interest TEXT,
  message TEXT,
  enquiry_type TEXT,
  finance_type TEXT
);

-- 4. Digitized Quote Portal Tables
CREATE TABLE IF NOT EXISTS quotes (
  id BIGSERIAL PRIMARY KEY,
  public_id UUID DEFAULT gen_random_uuid() UNIQUE, -- Added for secure dashboard access
  created_at TIMESTAMPTZ DEFAULT NOW(),
  user_email TEXT NOT NULL,
  full_name TEXT,
  phone_number TEXT,
  finance_type TEXT,
  pod_purpose TEXT,
  installation_address TEXT,
  infra_status JSONB, -- Stores {electricity: bool, water: bool, sewage: bool}
  additional_info TEXT,
  status TEXT DEFAULT 'Submitted', -- Submitted, Review, Accepted, Signed
  quote_amount DECIMAL,
  quote_file_url TEXT,
  team_notes TEXT
);

-- Ensure public_id exists for existing tables
ALTER TABLE quotes ADD COLUMN IF NOT EXISTS public_id UUID DEFAULT gen_random_uuid() UNIQUE;

CREATE TABLE IF NOT EXISTS quote_documents (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  quote_id BIGINT REFERENCES quotes(id) ON DELETE CASCADE,
  file_url TEXT NOT NULL,
  document_type TEXT -- e.g., 'ID Copy', 'Bank Statement', 'Client Upload'
);

-- 5. Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE brochures ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_documents ENABLE ROW LEVEL SECURITY;

-- 6. RLS Policies (Public Access for Client Portal)

-- Quotes Policies
DROP POLICY IF EXISTS "Allow anon quote insertion" ON quotes;
CREATE POLICY "Allow anon quote insertion" ON quotes FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS "Allow anon select by public_id" ON quotes;
CREATE POLICY "Allow anon select by public_id" ON quotes FOR SELECT TO anon 
USING (public_id::text = COALESCE(current_setting('request.headers', true)::json->>'x-quote-public-id', 'none'));

-- Quote Documents Policies
DROP POLICY IF EXISTS "Users can insert their own docs" ON quote_documents;
CREATE POLICY "Users can insert their own docs" ON quote_documents FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Users can view their own docs" ON quote_documents;
CREATE POLICY "Users can view their own docs" ON quote_documents FOR SELECT USING (true);

-- Lead Policies
DROP POLICY IF EXISTS "Allow anon lead insertion" ON leads;
CREATE POLICY "Allow anon lead insertion" ON leads FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS "Restrict anon lead viewing" ON leads;
CREATE POLICY "Restrict anon lead viewing" ON leads FOR SELECT TO anon USING (false);

-- Storage Policies (oracle-portfolio bucket)
-- Note: These apply to the storage.objects table in Supabase
DROP POLICY IF EXISTS "Restricted anon uploads to quote-uploads" ON storage.objects;
CREATE POLICY "Restricted anon uploads to quote-uploads" ON storage.objects
FOR INSERT TO anon
WITH CHECK (
  bucket_id = 'oracle-portfolio' AND 
  (storage.foldername(name))[1] = 'quote-uploads' AND
  (LOWER(storage.extension(name)) = ANY (ARRAY['pdf', 'png', 'jpg', 'jpeg'])) AND
  (metadata->>'size')::int <= 5242880
);

DROP POLICY IF EXISTS "Public Read Access" ON storage.objects;
CREATE POLICY "Public Read Access" ON storage.objects
FOR SELECT TO anon
USING (bucket_id = 'oracle-portfolio');

-- Public Read Policies for Product Data
DROP POLICY IF EXISTS "Public Access" ON products;
CREATE POLICY "Public Access" ON products FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Access" ON brochures;
CREATE POLICY "Public Access" ON brochures FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Access" ON product_images;
CREATE POLICY "Public Access" ON product_images FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Access" ON product_plans;
CREATE POLICY "Public Access" ON product_plans FOR SELECT USING (true);

-- 7. Performance Indexes
CREATE INDEX IF NOT EXISTS idx_quotes_user_email ON quotes(user_email);
CREATE INDEX IF NOT EXISTS idx_quote_documents_quote_id ON quote_documents(quote_id);
CREATE INDEX IF NOT EXISTS idx_product_images_product_id ON product_images(product_id);
CREATE INDEX IF NOT EXISTS idx_product_plans_product_id ON product_plans(product_id);
