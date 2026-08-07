# NestFlex Project Instructions

## Project Context
- **Website:** https://nestflex.github.io/NestFlex/
- **GitHub:** https://github.com/NestFlex/NestFlex
- **Organization:** https://github.com/NestFlex
- **Workspace:** /home/jacqueslagrange_me/Modular_Homes_app

## Branding & Identity
- **Logo:** https://jmztkqukornrftdbeyto.supabase.co/storage/v1/object/public/oracle-portfolio/General%20Profiles/NESTFLEX.png
- **Agent:** Jacques La Grange
- **Agency:** Only Realty Group
- **Title:** Principle Property Practitioner
- **Role:** Authorised Agent
- **Theme:** Professional, clean, consistent with Only Realty and NestFlex.

## Technical Stack
- **Backend:** Supabase (https://jmztkqukornrftdbeyto.supabase.co)
- **Database Tables:** `leads`, `quotes`, `products`, `brochures`, `product_images`, `product_plans`, `quote_documents`
- **Storage Buckets:** `oracle-portfolio` (Portfolio assets), `client-uploads` (Client quotes/docs - MUST BE PUBLIC)
- **Email:** EmailJS (Template ID: `template_sk3cq0u`)
- **Analytics:** GA4 (ID: `G-BEZXL8JXEF`)

## Deployment
- **Method:** GitHub Pages
- **Trigger:** Pushes to `main` branch.

## Critical Maintenance
- **Supabase RLS:** If "new row violates row-level security policy" error occurs, re-run the `CREATE POLICY` section in `SCHEMA.sql` via the Supabase SQL Editor.
