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

-- Create public read policies
CREATE POLICY "Public Access" ON products FOR SELECT USING (true);
CREATE POLICY "Public Access" ON brochures FOR SELECT USING (true);
CREATE POLICY "Public Access" ON product_images FOR SELECT USING (true);
CREATE POLICY "Public Access" ON product_plans FOR SELECT USING (true);

-- Create insert-only policy for leads
CREATE POLICY "Insert Leads" ON leads FOR INSERT WITH CHECK (true);
