// ============================================================
// PHOTO METADATA — 15 Riebeeck Street, Seaview
// Sourced directly from the photographer's metadata index
// (image-metadata-index-v3.xlsx / 'Image Index' tab).
//
// Keyed by SEO filename (no extension) — the same slug used in the
// Supabase storage paths in assets-config.js. properties.html looks
// each photo up here first for its title/alt/description/keywords;
// only photos with no match fall back to a filename-derived caption.
//
// 36 photos were shot on 2026-09-02; 1 was discarded here (blurred,
// out of focus) so it is not listed at all. 8 of the remaining 35 are
// currently live in assets-config.js; the other 27 are pre-loaded here
// so the moment Jacques uploads them (matching this seo-filename via
// asset-manager.html) the real title/alt/description appear automatically.
// 8 are flagged 'prime': true — the strongest listing candidates.
// ============================================================
window.PHOTO_METADATA = {
  '01-last-elevated-vacant-stand-with-ocean-views-at-15-riebeeck-street-seaview-for-sale': {
    order: 1,
    prime: true,
    title: 'Elevated Coastline Panorama',
    alt: 'Permanent ocean views from elevated vacant stand at 15 Riebeeck Street Seaview',
    description: 'Wide elevated view of the Seaview coastline and houses, with lush green trees in the foreground.',
    keywords: 'Seaview ocean views, elevated vacant land, coastal property Gqeberha, 15 Riebeeck Street'
  },
  '02-spectacular-sunset-ocean-views-15-riebeeck-street-seaview-gqeberha': {
    order: 2,
    prime: true,
    title: 'Sunset Sea Views over Turquoise Cottage',
    alt: 'Spectacular sunset and sea views from 15 Riebeeck Street Seaview Gqeberha',
    description: 'Gorgeous view of the ocean with a turquoise-roofed house on the left, looking out from the elevated plot at sunset.',
    keywords: 'Sunset ocean views, Seaview coastal property, prime vacant land Eastern Cape'
  },
  '03-elevated-vacant-stand-sloping-terrain-and-ocean-outlooks-seaview': {
    order: 3,
    prime: true,
    title: 'Elevated Slope Sea Outlook',
    alt: 'Looking down the elevated stand at 15 Riebeeck Street towards the ocean',
    description: 'Looking down through the green foliage and trees on the plot towards a neighboring street and ocean.',
    keywords: 'Elevated stand Seaview, ocean outlook, real estate Seaview Gqeberha'
  },
  '04-sea-waves-framed-by-coastal-flora-15-riebeeck-street-seaview': {
    order: 4,
    prime: false,
    title: 'Sea Waves Framed by Coastal Branches',
    alt: 'Breathtaking sea views framed by coastal trees at 15 Riebeeck Street',
    description: 'View of the ocean waves through dry, artistic bare branches of a tree on the left.',
    keywords: 'Coastal vegetation, Seaview ocean views, vacant land Seaview Port Elizabeth'
  },
  '05-dramatic-sunset-coastal-sky-seaview-port-elizabeth': {
    order: 5,
    prime: false,
    title: 'Dramatic Sunset Coastal Sky',
    alt: 'Dramatic sunset sky over coastal village of Seaview Port Elizabeth',
    description: 'Wide angle view of the dramatic cloudy sky at sunset, with treetops along the bottom edge.',
    keywords: 'Coastal sunset sky, Seaview atmosphere, Gqeberha coastal living'
  },
  '06-lush-coastal-vegetation-vacant-plot-seaview-clarendon-marine': {
    order: 6,
    prime: false,
    title: 'Lush Natural Vegetation & Plot Boundary',
    alt: 'Natural vegetation and trees on elevated vacant stand at 15 Riebeeck Street Seaview',
    description: 'Close-up view of the wild green bushes and bare trees on the vacant plot, with a house and ocean behind.',
    keywords: 'Seaview vacant plot, natural bush, 15 Riebeeck Street, Clarendon Marine land'
  },
  '07-indigenous-coastal-ground-cover-15-riebeeck-street-clarendon-marine': {
    order: 7,
    prime: false,
    title: 'Ground-Level Indigenous Flora',
    alt: 'Close-up of green ground cover and soil on vacant plot in Clarendon Marine',
    description: 'Ground level close-up shot of green grass, weeds, and broad-leafed plants growing on the plot.',
    keywords: 'Coastal soil, plot vegetation, Seaview vacant land details'
  },
  '08-serene-sea-sunset-silhouettes-seaview-port-elizabeth': {
    order: 8,
    prime: false,
    title: 'Serene Sea View Silhouette',
    alt: 'Serene coastal sunset view from 15 Riebeeck Street Seaview Port Elizabeth',
    description: 'Soft sunset view over the ocean with tree silhouettes on the left and a coastal house on the right.',
    keywords: 'Coastal sunset, peaceful neighborhood, Seaview ocean views'
  },
  '09-golden-sunset-glowing-over-ocean-waves-seaview-gqeberha': {
    order: 9,
    prime: true,
    title: 'Golden Sunset over Seaview Shore',
    alt: 'Warm sunset glow over the ocean at 15 Riebeeck Street Seaview',
    description: 'Breathtaking sunset over the sea with a house on the right, displaying beautiful warm colors in the sky and sea.',
    keywords: 'Sunset sea views, premium coastal land, Gqeberha vacant stand'
  },
  '10-vibrant-sunset-horizon-and-neighborhood-skyline-seaview': {
    order: 10,
    prime: false,
    title: 'Vibrant Coastal Horizon',
    alt: 'Scenic coastal sky and houses in Seaview Gqeberha',
    description: 'Expansive coastal sky with light clouds, looking over houses along the coastline with two tall pine trees.',
    keywords: 'Seaview neighborhood sky, coastal living, Eastern Cape real estate'
  },
  '11-coastal-sunset-framing-modern-neighbour-homes-seaview': {
    order: 11,
    prime: false,
    title: 'Sunset Waves and Modern Residence',
    alt: 'Coastal sunset showing neighboring modern home and ocean in Seaview',
    description: 'Beautiful sunset view highlighting the ocean waves and the edge of a modern neighboring house on the right.',
    keywords: 'Seaview coastal lifestyle, modern neighborhood, permanent sea views'
  },
  '12-riebeeck-street-coastal-road-and-ocean-views-clarendon-marine': {
    order: 12,
    prime: false,
    title: 'Riebeeck Street Coastal Outlook',
    alt: 'Ocean view and coastal road at Seaview Eastern Cape',
    description: 'Coastal view showing the street, ocean, and surrounding vegetation, but captured upside down.',
    keywords: 'Seaview coastal road, ocean views Gqeberha, 15 Riebeeck Street'
  },
  '13-panoramic-green-foliage-and-natural-vegetation-vacant-plot-seaview': {
    order: 13,
    prime: true,
    title: 'Plot Boundary and Coastal Foliage',
    alt: 'Panoramic view of the green foliage and vacant plot at 15 Riebeeck Street',
    description: 'Wide panoramic landscape showing the thick green bushes on the plot, looking towards the green-roofed house.',
    keywords: 'Vacant stand vegetation, wide view Seaview, coastal land'
  },
  '14-modern-residential-architecture-neighbor-home-riebeeck-street-seaview': {
    order: 14,
    prime: false,
    title: 'Neighboring Residence Architecture',
    alt: 'Modern neighbor house at Seaview coastal village Port Elizabeth',
    description: 'View of the neighbouring house with beige/grey walls and dark tiled roof, but captured upside down.',
    keywords: 'Seaview modern architecture, coastal residential neighborhood'
  },
  '15-panoramic-sea-views-from-vacant-residential-stand-seaview': {
    order: 15,
    prime: false,
    title: 'Panoramic Coastal Stand View',
    alt: 'Ocean panorama and surrounding coastal residential properties in Seaview',
    description: 'Wide panorama of the ocean, coastline, green bushes, and neighboring properties.',
    keywords: 'Coastal panorama, Seaview ocean outlook, vacant plot views'
  },
  '16-hillside-property-sea-views-and-neighborhood-homes-seaview': {
    order: 16,
    prime: false,
    title: 'Elevated Property Outlook towards Sea',
    alt: 'Ocean views and neighboring homes from elevated plot in Seaview Gqeberha',
    description: 'View from the elevated plot showing a house with a green corrugated roof and other houses with the ocean behind.',
    keywords: 'Elevated sea views, neighboring properties Seaview, vacant stand Port Elizabeth'
  },
  '17-secure-residential-neighborhood-boundary-and-coastal-trees-seaview': {
    order: 17,
    prime: false,
    title: 'Neighbor Boundary Wall & Tree Profile',
    alt: 'Grey boundary wall and coastal trees in Seaview Port Elizabeth',
    description: 'Grey boundary wall and green trees of a neighboring property, with the ocean visible in the background.',
    keywords: 'Neighbor boundary, Seaview security, residential area Seaview'
  },
  '18-crashing-ocean-waves-views-from-15-riebeeck-street-seaview': {
    order: 18,
    prime: false,
    title: 'Vibrant Sea View with Crashing Waves',
    alt: 'Ocean views of crashing waves from 15 Riebeeck Street Seaview',
    description: 'Ocean views with a house with a bright turquoise corrugated roof and another house with grey tiles.',
    keywords: 'Crashing waves Seaview, coastal plot ocean view, Gqeberha land'
  },
  '19-artistic-bare-tree-silhouette-framing-ocean-waves-seaview': {
    order: 19,
    prime: false,
    title: 'Artistic Branch Silhouette over Ocean',
    alt: 'Bare branches of a tree framing the ocean waves at Seaview coastal village',
    description: 'Artistic shot of bare tree branches stretching across the sky, with the ocean waves in the background.',
    keywords: 'Coastal aesthetic, sea view vacant plot, Seaview nature'
  },
  '20-hillside-neighborhood-views-and-crashing-waves-seaview': {
    order: 20,
    prime: false,
    title: 'Hillside Neighborhood and Crashing Waves',
    alt: 'Elevated view of coastal houses and crashing waves on Seaview shore',
    description: 'Multi-level view of houses along the hillside with waves crashing on the rocky shore of Seaview in the distance.',
    keywords: 'Crashing waves, rocky shore, Seaview residential development'
  },
  '21-elevated-hillside-residences-and-unobstructed-sea-views-seaview': {
    order: 21,
    prime: false,
    title: 'Hillside Residences and Sea View',
    alt: 'Seaview houses and ocean view Port Elizabeth',
    description: 'View of coastal houses and the sea, but captured upside down.',
    keywords: 'Seaview property views, Gqeberha real estate, coastal stand'
  },
  '22-vibrant-sunset-neighborhood-skyline-modern-residences-seaview': {
    order: 22,
    prime: false,
    title: 'Sunset Streetscape with Modern Home',
    alt: 'Warm sunset over Seaview neighborhood with modern coastal homes',
    description: 'Scenic view of the sunset sky, a white boundary wall on the left, a tall pine tree, and a modern house.',
    keywords: 'Sunset sky, modern neighborhood, Seaview houses, 15 Riebeeck Street'
  },
  '23-tarred-road-asphalt-street-frontage-at-sunset-riebeeck-street': {
    order: 23,
    prime: false,
    title: 'Asphalt Street Frontage at Sunset',
    alt: 'Tarred street and modern houses at sunset in Seaview Gqeberha',
    description: 'Sunset view looking down a tarred street (Riebeeck Street), showing a modern grey house with a double garage.',
    keywords: 'Tarred road Seaview, modern double garage home, sunset streetscape'
  },
  '24-vacant-land-for-sale-street-frontage-15-riebeeck-street-seaview': {
    order: 24,
    prime: true,
    title: 'Street Frontage and For Sale Sign',
    alt: 'Grassy sloping vacant plot with For Sale sign at 15 Riebeeck Street Seaview',
    description: 'View of the grassy, sloping vacant plot (Erf 24) from the street, with a \'FOR SALE\' sign on the left edge.',
    keywords: 'Vacant land for sale Seaview, 15 Riebeeck Street, real estate Gqeberha'
  },
  '25-sloping-vacant-plot-grassy-terrain-for-sale-seaview': {
    order: 25,
    prime: true,
    title: 'Sloping Terrain from Street Level',
    alt: 'Sloping terrain and vegetation of vacant stand in Seaview',
    description: 'Looking up the steep grassy slope of the vacant plot from the road, with a \'FOR SALE\' sign on the right.',
    keywords: 'Sloping plot Seaview, vacant stand slope, property Gqeberha'
  },
  '26-riebeeck-street-roadfrontage-and-sloping-vacant-stand-seaview': {
    order: 26,
    prime: false,
    title: 'Asphalt Road Frontage of Plot',
    alt: 'Road frontage and grassy slope of vacant plot in Seaview',
    description: 'Looking along the asphalt road and the grassy side of the plot, but captured upside down.',
    keywords: 'Street frontage, Riebeeck Street, vacant stand Seaview'
  },
  '27-street-scene-and-modern-coastal-residences-clarendon-marine': {
    order: 27,
    prime: false,
    title: 'Street Scene near Riebeeck Stand',
    alt: 'Parked vehicle and modern residential houses in Seaview',
    description: 'A parked silver car and a modern house near the plot, but captured upside down.',
    keywords: 'Seaview neighborhood street, residential area, asphalt road'
  },
  '28-looking-down-riebeeck-street-towards-ocean-seaview': {
    order: 28,
    prime: false,
    title: 'Riebeeck Street looking towards Beach',
    alt: 'Looking down Riebeeck Street Seaview towards the sea with vacant plot on left',
    description: 'Looking down the asphalt road (Riebeeck Street) towards the ocean, with the grassy plot on the left.',
    keywords: 'Road to the beach, Riebeeck Street ocean view, Seaview property'
  },
  '29-residential-streetscape-looking-uphill-riebeeck-street-seaview': {
    order: 29,
    prime: false,
    title: 'Residential Street View looking Uphill',
    alt: 'Tarred street looking uphill with boundary walls in Seaview Port Elizabeth',
    description: 'Looking up the road, showing a silver car parked on the right, and a white wall on the left with a warning sign.',
    keywords: 'Riebeeck Street uphill, security warning sign, residential street Seaview'
  },
  '30-streetfront-view-looking-uphill-with-vacant-plot-seaview': {
    order: 30,
    prime: false,
    title: 'Street Frontage looking Uphill with Plot',
    alt: 'Street view looking up Riebeeck Street with vacant stand on the left',
    description: 'View of the tarred road looking uphill, with the grassy plot on the left and houses on the right.',
    keywords: 'Riebeeck Street view, neighborhood context, vacant stand Gqeberha'
  },
  '31-panoramic-coastal-village-and-ocean-outlooks-clarendon-marine': {
    order: 31,
    prime: false,
    title: 'Panoramic Coastal Settlement View',
    alt: 'Panoramic ocean view from elevated property in Seaview',
    description: 'Elevated view of the houses and ocean, but captured upside down.',
    keywords: 'Seaview ocean views, elevated property Gqeberha, coastal living'
  },
  '32-residential-street-boundary-walls-and-established-homes-seaview': {
    order: 32,
    prime: false,
    title: 'Neighboring Boundary Walls & Homes',
    alt: 'Neighboring residential boundary walls and houses in Seaview',
    description: 'Close-up view of street walls and houses, but captured upside down.',
    keywords: 'Neighborhood boundaries, Seaview residential road'
  },
  '33-unobstructed-sea-views-from-upper-boundary-of-vacant-stand-seaview': {
    order: 33,
    prime: false,
    title: 'Elevated Sea Views from Upper Boundary',
    alt: 'Panoramic sea views and green-roofed house in Seaview Port Elizabeth',
    description: 'View of a house with a green roof, pine trees, and the ocean, but captured upside down.',
    keywords: 'Sea views, green roof house, Seaview coastal plot'
  },
  '34-prestigious-neighborhood-streetscape-at-sunset-seaview': {
    order: 34,
    prime: false,
    title: 'Prestigious Sunset Street Profile',
    alt: 'Beautiful sunset streetscape in modern Seaview neighborhood Port Elizabeth',
    description: 'Soft warm sunset looking down the street with clean lawns, a palm tree, and high-end modern houses.',
    keywords: 'Sunset streetscape, modern houses, prestigious neighborhood Seaview'
  },
  '35-luxury-coastal-residences-and-manicured-lawns-at-sunset-seaview': {
    order: 35,
    prime: true,
    title: 'Luxury Neighborhood Sunset Scene',
    alt: 'Prestigious streetscape at sunset showing luxury homes in Seaview Gqeberha',
    description: 'Stately view looking down the street during a vibrant sunset, showing modern high-end homes and manicured lawns.',
    keywords: 'Luxury coastal homes, manicured lawns, Seaview neighborhood, sunset Gqeberha'
  },
};
