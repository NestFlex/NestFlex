import os
import re
from supabase import create_client, Client

# --- CONFIGURATION ---
# Replace these with your actual Supabase details if not using environment variables
SUPABASE_URL = "https://jmztkqukornrftdbeyto.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptenRrcXVrb3JucmZ0ZGJleXRvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDY3ODg4OCwiZXhwIjoyMDkwMjU0ODg4fQ.lXa-1x3mOxKd3k8QupX4H6MchRkdVpBAiooYIJHwJsA" # Use Service Role Key for database write access
BUCKET_NAME = "oracle-portfolio"
STORAGE_PREFIX = "Galary/" # Folder where you upload gallery images

def sync_storage_to_db():
    supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

    print(f"--- Starting Sync for bucket: {BUCKET_NAME} ---")

    valid_urls = set()

    # 1. List all files in the bucket under the prefix
    files = supabase.storage.from_(BUCKET_NAME).list(STORAGE_PREFIX, {"limit": 100, "offset": 0})
    
    if not files:
        print("No folders found in " + STORAGE_PREFIX)
    else:
        for folder in files:
            if folder['name'] == '.emptyFolderPlaceholder':
                continue
                
            # Assuming folder structure is Galary/{product_id}/
            product_id_str = folder['name']
            
            # Validate that the folder name is a number (Product ID)
            if not product_id_str.isdigit():
                print(f"Skipping folder '{product_id_str}' - not a valid integer Product ID.")
                continue
                
            product_id = int(product_id_str)
            inner_path = f"{STORAGE_PREFIX}{product_id_str}"
            
            images = supabase.storage.from_(BUCKET_NAME).list(inner_path)
            
            for img in images:
                if img['name'] == '.emptyFolderPlaceholder':
                    continue
                    
                file_path = f"{inner_path}/{img['name']}"
                # Construct the public URL
                public_url = f"{SUPABASE_URL}/storage/v1/object/public/{BUCKET_NAME}/{file_path}"
                valid_urls.add(public_url)
                
                # Check if this URL already exists in the product_images table
                exists = supabase.table("product_images").select("id").eq("image_url", public_url).execute()
                
                if not exists.data:
                    print(f"Adding new image for Product {product_id}: {img['name']}")
                    supabase.table("product_images").insert({
                        "product_id": product_id,
                        "image_url": public_url,
                        "alt_text": f"Gallery image for Product {product_id}",
                        "display_order": 0
                    }).execute()
                else:
                    # Optional: print(f"Skipping existing image: {img['name']}")
                    pass

    # 2. Prune orphaned records
    print("--- Pruning orphaned records ---")
    all_db_images = supabase.table("product_images").select("id", "image_url").execute()
    if all_db_images.data:
        for db_img in all_db_images.data:
            url = db_img['image_url']
            # Only prune images that belong to our Supabase storage bucket
            if f"/storage/v1/object/public/{BUCKET_NAME}/{STORAGE_PREFIX}" in url:
                if url not in valid_urls:
                    print(f"Deleting orphaned record: {url}")
                    supabase.table("product_images").delete().eq("id", db_img['id']).execute()

    print("--- Sync Complete ---")

if __name__ == "__main__":
    # Check if key is provided
    if SUPABASE_KEY == "YOUR_SERVICE_ROLE_KEY":
        print("ERROR: Please update SUPABASE_KEY with your 'service_role' key from Supabase Settings -> API.")
    else:
        sync_storage_to_db()
