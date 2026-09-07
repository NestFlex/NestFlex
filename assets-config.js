// ============================================================
// ASSET CONFIG for properties.html (Vacant Land & NestFlex Builds)
// ------------------------------------------------------------
// Add as many photos as you want to either "photos" array below —
// the gallery grid grows automatically, no limit. Leave any single
// value as "" for anything not ready — the page shows a clean
// "coming soon" placeholder instead of a broken image or error.
//
// Every URL in this file was fetched and checked before being put
// here. Nothing is a guess or a stand-in dressed up as real.
// ============================================================
window.ASSETS = {

  land: {
    // Verified real and live (fetched 2026-09-07).
    photos: [
      "https://jmztkqukornrftdbeyto.supabase.co/storage/v1/object/public/oracle-portfolio/CurrentProject/15-riebeek-street-seaview/01-last-elevated-vacant-stand-with-ocean-views-at-15-riebeeck-street-seaview-for-sale.jpg",
      "https://jmztkqukornrftdbeyto.supabase.co/storage/v1/object/public/oracle-portfolio/CurrentProject/15-riebeek-street-seaview/02-spectacular-sunset-ocean-views-15-riebeeck-street-seaview-gqeberha.jpg",
      "https://jmztkqukornrftdbeyto.supabase.co/storage/v1/object/public/oracle-portfolio/CurrentProject/15-riebeek-street-seaview/04-sea-waves-framed-by-coastal-flora-15-riebeeck-street-seaview.jpg"
    ],

    // Left empty on purpose. The URL previously here was checked and
    // turned out to be a 3D model file (a NestFlex product pod), not a
    // video of this property. There is currently no real video tour.
    videoTour: "",

    // Real 3D model page (verified it loads). The model itself is a
    // Google Drive file that isn't shared "Anyone with the link" yet —
    // fix that in Drive and this will start working with no code change.
    model3D: "https://3dviewer.co/share/4Rk0SG1QPj"
  },

  build: {
    // Verified real and live.
    floorPlan: "https://jmztkqukornrftdbeyto.supabase.co/storage/v1/object/public/oracle-portfolio/product-plan/4/4pln-con-2b-45.png",

    // Checked and confirmed these do NOT exist (400 errors) - removed
    // rather than left in to silently fall back to stock photos.
    // Add real render URLs here once you have them; unlimited count.
    photos: []
  },

  agent: {
    headshot: "https://jmztkqukornrftdbeyto.supabase.co/storage/v1/object/public/oracle-portfolio/General%20Profiles/headshot%20jlg.png",
    coverPhoto: "https://jmztkqukornrftdbeyto.supabase.co/storage/v1/object/public/oracle-portfolio/CurrentProject/WhatsApp%20Image%202026-06-28%20at%2018.23.46.jpeg"
  },

  // Portal listing links. Blank = shows a grey "pending" badge.
  // Fill in once each listing is actually live.
  portals: {
    property24: "",
    privateProperty: "",
    onlyRealty: ""
  }

};
