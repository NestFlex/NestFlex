# Modular Homes App - Deployment Guide

This project is a Google Apps Script web application that integrates with Supabase for data management and lead capture.

## Prerequisites
- A Google Account (for Apps Script).
- A Supabase Project.

## Supabase Setup
1. Create a new project in Supabase.
2. Run the SQL provided in `SCHEMA.sql` in the Supabase SQL Editor to create the necessary tables (`products`, `brochures`, `leads`, `product_images`).
3. Create a public storage bucket named `oracle-portfolio`.
4. (Optional) Enable Row Level Security (RLS) and set up policies as suggested in `SCHEMA.sql`.
5. Note your `SUPABASE_URL` and `SUPABASE_KEY` (Anon Key).

## Adding Gallery Images
To add images to a product's gallery:
1. Upload images to your Supabase bucket (e.g., in a `Galary/` folder).
2. Add rows to the `product_images` table:
   - `product_id`: The ID of the product.
   - `image_url`: The relative path or full URL to the image.
   - `display_order`: (Optional) The order in which images appear (lowest first).

## Apps Script Deployment
1. Go to [script.google.com](https://script.google.com).
2. Create a new project named "Modular Homes App".
3. Copy the contents of `Code.gs`, `Index.html`, and `appsscript.json` from this repository to your Apps Script project.
   - Note: In the Apps Script editor, you may need to go to Project Settings and check "Show 'appsscript.json' manifest file in editor".
4. Replace the `SUPABASE_URL` and `SUPABASE_KEY` in `Index.html` (around line 625) with your actual project details if they differ from the defaults.
5. Click **Deploy** > **New Deployment**.
6. Select **Web App**.
7. Configure the following:
   - **Description**: Modular Homes App Production
   - **Execute as**: Me (Your account)
   - **Who has access**: Anyone
8. Click **Deploy**.
9. Authorize the necessary permissions (MailApp).
10. Copy the **Web App URL**. This is your live application link.

## Testing
- Open the `Tests.gs` file in the Apps Script editor.
- Select the `runTests` function and click **Run**.
- Check the Execution Log to ensure all backend tests pass.

## Operationalization Checklist
- [ ] Supabase tables created and populated.
- [ ] Storage bucket configured and images uploaded.
- [ ] Apps Script deployed as a Web App.
- [ ] ROI calculator verified with regional data.
- [ ] Leads table monitored for new submissions.
- [ ] Email notifications working (test by requesting a brochure).
