-- Supabase Database Schema for Modular Homes App
-- IMPORTANT: Use BIGINT/BIGSERIAL to match existing integer-based primary keys.

-- 1. Products Table
CREATE TABLE IF NOT EXISTS products (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  "Title" TEXT NOT NULL,
  "Price" TEXT,
  "Category" TEXT,
  "ImageURL" TEXT,
  description TEXT
);

-- 2. Brochures Table
CREATE TABLE IF NOT EXISTS brochures (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  product_id BIGINT REFERENCES products(id) ON DELETE CASCADE,
  file_url TEXT NOT NULL
);

-- 3. Leads Table
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

-- 4. Product Gallery Images Table
-- Destructive operation here is intentional to fix the previously failed UUID vs INT constraint error.
DROP TABLE IF EXISTS product_images;

CREATE TABLE product_images (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  product_id BIGINT REFERENCES products(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  display_order INT DEFAULT 0
);

-- 5. Product Plans Table
CREATE TABLE IF NOT EXISTS product_plans (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  product_id BIGINT REFERENCES products(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  display_order INT DEFAULT 0
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_product_images_product_id ON product_images(product_id);
CREATE INDEX IF NOT EXISTS idx_product_plans_product_id ON product_plans(product_id);

-- --- Optional Security Policies (Uncomment to use) ---

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE brochures ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- 6. Quotes Table (Client Portal)
CREATE TABLE IF NOT EXISTS quotes (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  user_email TEXT NOT NULL,
  full_name TEXT,
  phone_number TEXT,
  finance_type TEXT,
  pod_purpose TEXT,
  installation_address TEXT,
  infra_status JSONB, -- {electricity: bool, water: bool, sewage: bool}
  additional_info TEXT,
  status TEXT DEFAULT 'Submitted', -- Submitted, Review, Accepted, Signed
  quote_amount DECIMAL,
  quote_file_url TEXT,
  team_notes TEXT
);

-- 7. Quote Documents Table
CREATE TABLE IF NOT EXISTS quote_documents (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  quote_id BIGINT REFERENCES quotes(id) ON DELETE CASCADE,
  file_url TEXT NOT NULL,
  document_type TEXT -- ID Copy, Bank Statement, etc.
);

-- Enable RLS for new tables
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_documents ENABLE ROW LEVEL SECURITY;

-- Create policies for quotes
CREATE POLICY "Users can insert their own quotes" ON quotes FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can view their own quotes" ON quotes FOR SELECT USING (true); -- In a real app, filter by email

-- Create policies for quote_documents
CREATE POLICY "Users can insert their own docs" ON quote_documents FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can view their own docs" ON quote_documents FOR SELECT USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_quotes_user_email ON quotes(user_email);
CREATE INDEX IF NOT EXISTS idx_quote_documents_quote_id ON quote_documents(quote_id);
