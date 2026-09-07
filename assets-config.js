// ============================================================
// ASSET CONFIG for properties.html (Vacant Land & NestFlex Builds)
// ------------------------------------------------------------
// Edit the values below directly, OR open asset-manager.html,
// paste each URL into its labeled field, and click "Generate" to
// download an updated copy of this exact file.
//
// Leave a value as "" (empty string) for anything not ready yet —
// the page will show a clean "Coming soon" placeholder instead of
// a broken image or a 403 error. Nothing here is faked.
// ============================================================
window.ASSETS = {

  land: {
    // The one confirmed-real, already-uploaded site photo.
    heroPhoto: "https://jmztkqukornrftdbeyto.supabase.co/storage/v1/object/public/oracle-portfolio/CurrentProject/WhatsApp%20Image%202026-06-28%20at%2018.23.46.jpeg",

    // Additional site photos — empty until uploaded to Supabase.
    gallery2: "",
    gallery3: "",

    // Google Drive /preview video link. As of this build it returns a
    // Google 403 — the Drive file's sharing setting is not "Anyone with
    // the link can view". Fix that in Google Drive, then this will work
    // as-is; no code change needed.
    videoTour: "https://drive.google.com/file/d/1NVqwsxqFpgfMdOko19bpAQHUAjRVUJmB/preview",

    // 3dviewer.co share link. As of this build it also returns a Google
    // 403 — the underlying 3D model file (hosted on Google Drive) isn't
    // shared as "Anyone with the link" either. Same fix applies.
    model3D: "https://3dviewer.co/share/4Rk0SG1QPj"
  },

  build: {
    // Proposed NestFlex 45m² configuration — floor plan + renders.
    // These already have onerror fallbacks to stock photos baked into
    // properties.html, so a broken URL here never shows a broken image —
    // it just falls back to a generic stock photo until you replace it.
    floorPlan: "https://jmztkqukornrftdbeyto.supabase.co/storage/v1/object/public/oracle-portfolio/product-plan/4/4pln-con-2b-45.png",
    render1_exterior: "https://jmztkqukornrftdbeyto.supabase.co/storage/v1/object/public/oracle-portfolio/CurrentProject/con-1bed-1bath/exterior.jpg",
    render2_living:   "https://jmztkqukornrftdbeyto.supabase.co/storage/v1/object/public/oracle-portfolio/CurrentProject/con-1bed-1bath/interior-living.jpg",
    render3_bedroom:  "https://jmztkqukornrftdbeyto.supabase.co/storage/v1/object/public/oracle-portfolio/CurrentProject/con-1bed-1bath/bedroom.jpg",
    render4_kitchen:  "https://jmztkqukornrftdbeyto.supabase.co/storage/v1/object/public/oracle-portfolio/CurrentProject/con-1bed-1bath/kitchen.jpg"
  },

  agent: {
    // Already real and working — only change these if you want a
    // different photo.
    headshot: "https://jmztkqukornrftdbeyto.supabase.co/storage/v1/object/public/oracle-portfolio/General%20Profiles/headshot%20jlg.png",
    coverPhoto: "https://jmztkqukornrftdbeyto.supabase.co/storage/v1/object/public/oracle-portfolio/CurrentProject/WhatsApp%20Image%202026-06-28%20at%2018.23.46.jpeg"
  }

};
