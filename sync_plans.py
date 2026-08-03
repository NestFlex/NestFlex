import os
import re
from supabase import create_client, Client

# --- CONFIGURATION ---
SUPABASE_URL = "https://jmztkqukornrftdbeyto.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptenRrcXVrb3JucmZ0ZGJleXRvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDY3ODg4OCwiZXhwIjoyMDkwMjU0ODg4fQ.lXa-1x3mOxKd3k8QupX4H6MchRkdVpBAiooYIJHwJsA"
BUCKET_NAME = "oracle-portfolio"
STORAGE_PREFIX = "product-plan/" # Folder within oracle-portfolio

def sync_plans_to_db():
    supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

    print(f"--- Starting Sync for bucket: {BUCKET_NAME} ---")

    valid_urls = set()

    # List items in the bucket
    files = supabase.storage.from_(BUCKET_NAME).list(STORAGE_PREFIX, {"limit": 100, "offset": 0})
    
    if not files:
        print(f"No files found in {BUCKET_NAME} with prefix {STORAGE_PREFIX}")
    else:
        for item in files:
            if item['name'] == '.emptyFolderPlaceholder':
                continue
            
            # Scenario A: Item is a folder (product_id)
            if item.get('id') is None:
                product_id_str = item['name']
                if product_id_str.isdigit():
                    product_id = int(product_id_str)
                    inner_path = f"{STORAGE_PREFIX}{product_id_str}"
                    inner_files = supabase.storage.from_(BUCKET_NAME).list(inner_path)
                    
                    for f in inner_files:
                        if f['name'] == '.emptyFolderPlaceholder':
                            continue
                        
                        file_path = f"{inner_path}/{f['name']}"
                        public_url = f"{SUPABASE_URL}/storage/v1/object/public/{BUCKET_NAME}/{file_path}"
                        valid_urls.add(public_url)
                        
                        process_image(supabase, product_id, public_url, f['name'])
            else:
                # Scenario B: Item is a file in the root
                # We might need a way to map root files to products if they aren't in folders.
                # For now, we follow the folder pattern.
                pass

    # Pruning orphaned records
    print("--- Pruning orphaned records ---")
    all_db_plans = supabase.table("product_plans").select("id", "image_url").execute()
    if all_db_plans.data:
        for db_plan in all_db_plans.data:
            url = db_plan['image_url']
            if f"/storage/v1/object/public/{BUCKET_NAME}/" in url:
                if url not in valid_urls:
                    print(f"Deleting orphaned record: {url}")
                    supabase.table("product_plans").delete().eq("id", db_plan['id']).execute()

    print("--- Sync Complete ---")

def process_image(supabase, product_id, public_url, file_name):
    exists = supabase.table("product_plans").select("id").eq("image_url", public_url).execute()
    if not exists.data:
        print(f"Adding new plan for Product {product_id}: {file_name}")
        supabase.table("product_plans").insert({
            "product_id": product_id,
            "image_url": public_url,
            "alt_text": f"Floor plan for Product {product_id}",
            "display_order": 0
        }).execute()
    else:
        pass

if __name__ == "__main__":
    sync_plans_to_db()
