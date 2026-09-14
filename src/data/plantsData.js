export const categories = [
  "All",
  "Hanging Pots & Baskets",
  "Railing Troughs & Saddle Pots",
  "Floor Rectangular Pots & Troughs",
  "Floor Round Pots & Architectural Containers",
  "Climbers & Trellis Plants",
  "Living Wall / Vertical Modular Pockets",
  "Compact Tabletop & Balcony Shelf Plants",
  "Shrubs",
  "Small Tree",
  "Herbs",
  "Creeper"
];

export const plantsData = [
  // 1. Hanging Pots & Baskets
  {
    id: 1,
    category: "Hanging Pots & Baskets",
    scientificName: "Epipremnum aureum",
    commonName: "Golden Pothos / Money Plant",
    lightSpec: "Bright Indirect / Partial Shade",
    minPrice: 25,
    maxPrice: 85,
    sizes: [
      { size: "Small (15–20 cm pot / 30 cm trail)", priceAED: "25 – 45" },
      { size: "Medium (25 cm pot / 60 cm trail)", priceAED: "55 – 85" }
    ],
    description: "Extremely hardy trailing vine that thrives on high balconies with filtered shade. Excellent for cascading visual depth.",
    images: [
      "/images/plants/plant-1-1.png",
      "/images/plants/plant-1-2.jpg",
      "/images/plants/plant-1-3.png"
    ]
  },
  {
    id: 2,
    category: "Hanging Pots & Baskets",
    scientificName: "Portulacaria afra prostrata",
    commonName: "Trailing Elephant Bush",
    lightSpec: "Full Sun to Partial Shade",
    minPrice: 35,
    maxPrice: 95,
    sizes: [
      { size: "Small (18 cm pot / 25 cm spread)", priceAED: "35 – 50" },
      { size: "Medium (24 cm pot / 45 cm spread)", priceAED: "65 – 95" }
    ],
    description: "Drought-tolerant succulent trailing plant, highly resistant to heat and balcony direct sun exposure.",
    images: [
      "/images/plants/plant-2-0.jpg",
      "/images/plants/plant-2-1.jpg",
      "/images/plants/plant-2-2.jpg",
      "/images/plants/plant-2-3.jpg"
    ]
  },
  {
    id: 3,
    category: "Hanging Pots & Baskets",
    scientificName: "Asparagus meyeri / densiflorus",
    commonName: "Foxtail / Asparagus Fern",
    lightSpec: "Filtered Sun / Light Shade",
    minPrice: 30,
    maxPrice: 90,
    sizes: [
      { size: "Small (20 cm pot)", priceAED: "30 – 45" },
      { size: "Medium (30 cm pot)", priceAED: "60 – 90" }
    ],
    description: "Feathery, soft foliage adding fine texture to high hanging baskets. Best placed away from strong wind.",
    images: [
      "/images/plants/plant-3-1.jpg",
      "/images/plants/plant-3-2.png",
      "/images/plants/plant-3-3.jpg"
    ]
  },
  {
    id: 11,
    category: "Hanging Pots & Baskets",
    scientificName: "Pelargonium peltatum",
    commonName: "Ivy Geranium",
    lightSpec: "Full Sun / Morning Sun",
    minPrice: 40,
    maxPrice: 65,
    sizes: [
      { size: "Medium (22 cm pot in bloom)", priceAED: "40 – 65" }
    ],
    description: "Cascading geranium with vibrant blooms, ideal for sunny hanging baskets and trailing displays on balconies.",
    images: [
      "/images/plants/plant-11-0.jpg",
      "/images/plants/plant-11-1.jpg"
    ]
  },
  {
    id: 12,
    category: "Hanging Pots & Baskets",
    scientificName: "Ophiopogon jaburan 'Variegata'",
    commonName: "Variegated Mondo Grass",
    lightSpec: "Partial Shade",
    minPrice: 30,
    maxPrice: 45,
    sizes: [
      { size: "Small (18 cm pot)", priceAED: "30 – 45" }
    ],
    description: "Elegant variegated grass-like foliage that cascades gracefully from hanging pots and shaded balcony corners.",
    images: [
      "/images/plants/plant-12-0.jpg",
      "/images/plants/plant-12-1.jpg"
    ]
  },
  {
    id: 41,
    category: "Hanging Pots & Baskets",
    scientificName: "Portulaca grandiflora",
    commonName: "Moss Rose (Portulaca)",
    lightSpec: "Full Sun",
    minPrice: 15,
    maxPrice: 35,
    sizes: [
      { size: "Small (15–18 cm pot)", priceAED: "15 – 35" }
    ],
    description: "Vibrant, sun-loving succulent with rose-like blooms in a rainbow of colors. Extremely drought-tolerant and perfect for hot balconies.",
    images: [
      "/images/plants/plant-41-0.jpg",
      "/images/plants/plant-41-1.jpg"
    ]
  },

  // 2. Railing Troughs & Saddle Pots
  {
    id: 4,
    category: "Railing Troughs & Saddle Pots",
    scientificName: "Bougainvillea (Dwarf Varieties)",
    commonName: "Dwarf Pixie / Flame Bougainvillea",
    lightSpec: "Extreme Full Sun",
    minPrice: 75,
    maxPrice: 220,
    sizes: [
      { size: "50 cm Trough (3–4 plants / 30-40 cm ht)", priceAED: "75 – 110" },
      { size: "80 cm Trough (Dense cover / 50 cm ht)", priceAED: "140 – 220" }
    ],
    description: "Compact profuse bloomer engineered specifically for railing troughs exposed to intense direct sunlight.",
    images: [
      "/images/plants/plant-4-0.jpg",
      "/images/plants/plant-4-1.jpg",
      "/images/plants/plant-4-2.webp",
      "/images/plants/plant-4-3.jpg"
    ]
  },
  {
    id: 5,
    category: "Railing Troughs & Saddle Pots",
    scientificName: "Pentas lanceolata",
    commonName: "Egyptian Starcluster",
    lightSpec: "Full Sun / Partial Sun",
    minPrice: 60,
    maxPrice: 175,
    sizes: [
      { size: "50 cm Trough (Height 35–45 cm)", priceAED: "60 – 90" },
      { size: "80 cm Trough (Height 40–50 cm)", priceAED: "120 – 175" }
    ],
    description: "Vibrant star-shaped blooms blooming continuously throughout warm months. Ideal for balustrade containers.",
    images: [
      "/images/plants/plant-5-0.jpg",
      "/images/plants/plant-5-1.jpg",
      "/images/plants/plant-5-2.jpg",
      "/images/plants/plant-5-3.jpg"
    ]
  },
  {
    id: 13,
    category: "Railing Troughs & Saddle Pots",
    scientificName: "Vinca rosea (Catharanthus)",
    commonName: "Madagascar Periwinkle",
    lightSpec: "Full Sun",
    minPrice: 45,
    maxPrice: 140,
    sizes: [
      { size: "50 cm Trough (Multi-color pack)", priceAED: "45 – 70" },
      { size: "80 cm Trough (Dense flowering)", priceAED: "90 – 140" }
    ],
    description: "Bright, cheerful blooms in mixed colors that thrive in extreme heat. Non-stop flowering throughout the warm season.",
    images: [
      "/images/plants/plant-13-0.jpg",
      "/images/plants/plant-13-1.jpg"
    ]
  },
  {
    id: 14,
    category: "Railing Troughs & Saddle Pots",
    scientificName: "Trachelospermum jasminoides",
    commonName: "Star Jasmine (Bush form)",
    lightSpec: "Sun to Partial Shade",
    minPrice: 95,
    maxPrice: 150,
    sizes: [
      { size: "60 cm Trough (Height 45–60 cm)", priceAED: "95 – 150" }
    ],
    description: "Sweetly fragrant white star-shaped flowers on dense glossy foliage. Compact bush form ideal for railing planters.",
    images: [
      "/images/plants/plant-14-0.jpg",
      "/images/plants/plant-14-1.jpg"
    ]
  },
  {
    id: 15,
    category: "Railing Troughs & Saddle Pots",
    scientificName: "Alternanthera dentata",
    commonName: "Purple Knight / Little Ruby",
    lightSpec: "Full Sun (Best color)",
    minPrice: 50,
    maxPrice: 80,
    sizes: [
      { size: "50 cm Trough (Height 25–30 cm)", priceAED: "50 – 80" }
    ],
    description: "Deep burgundy-purple foliage that intensifies with more sun. Stunning color contrast against green companion plants.",
    images: [
      "/images/plants/plant-15-0.jpg",
      "/images/plants/plant-15-1.jpg"
    ]
  },

  // 3. Floor Rectangular Pots & Troughs
  {
    id: 6,
    category: "Floor Rectangular Pots & Troughs",
    scientificName: "Sansevieria trifasciata / laurentii",
    commonName: "Snake Plant / Mother-in-Law's Tongue",
    lightSpec: "Shade / Indirect Sun / Wind Tolerant",
    minPrice: 120,
    maxPrice: 350,
    sizes: [
      { size: "60–80 cm height (Dense arrangement)", priceAED: "120 – 180" },
      { size: "100–120 cm height (Privacy screen)", priceAED: "220 – 350" }
    ],
    description: "Ultra-low maintenance vertical privacy divider. Unaffected by strong wind corridors.",
    images: [
      "/images/plants/plant-6-0.jpg",
      "/images/plants/plant-6-1.jpg",
      "/images/plants/plant-6-2.png",
      "/images/plants/plant-6-3.jpg"
    ]
  },
  {
    id: 7,
    category: "Floor Rectangular Pots & Troughs",
    scientificName: "Bamboo (Phyllostachys aurea)",
    commonName: "Golden Bamboo",
    lightSpec: "Full Sun (Requires deep watering)",
    minPrice: 220,
    maxPrice: 580,
    sizes: [
      { size: "1.5 m – 1.8 m height", priceAED: "220 – 340" },
      { size: "2.0 m – 2.2 m height", priceAED: "380 – 580" }
    ],
    description: "Tall natural screening solution for balcony perimeters creating dense tropical privacy barriers.",
    images: [
      "/images/plants/plant-7-0.jpg",
      "/images/plants/plant-7-1.jpg",
      "/images/plants/plant-7-2.png",
      "/images/plants/plant-7-3.jpg"
    ]
  },
  {
    id: 16,
    category: "Floor Rectangular Pots & Troughs",
    scientificName: "Ficus microcarpa 'Nitida'",
    commonName: "Curtain Fig Hedge",
    lightSpec: "Full Sun to Partial Shade",
    minPrice: 150,
    maxPrice: 450,
    sizes: [
      { size: "1.0 m – 1.2 m height", priceAED: "150 – 230" },
      { size: "1.5 m – 1.8 m height", priceAED: "280 – 450" }
    ],
    description: "Dense, glossy-leaved hedge plant perfect for creating living privacy walls along balcony edges.",
    images: [
      "/images/plants/plant-16-0.jpg",
      "/images/plants/plant-16-1.jpg"
    ]
  },
  {
    id: 17,
    category: "Floor Rectangular Pots & Troughs",
    scientificName: "Heliconia psittacorum",
    commonName: "False Bird of Paradise",
    lightSpec: "Morning Sun / Sheltered",
    minPrice: 180,
    maxPrice: 280,
    sizes: [
      { size: "1.0 m – 1.2 m height", priceAED: "180 – 280" }
    ],
    description: "Exotic tropical foliage with striking parrot-beak flowers. Adds dramatic color to sheltered balcony corners.",
    images: [
      "/images/plants/plant-17-0.jpg",
      "/images/plants/plant-17-1.jpg"
    ]
  },
  {
    id: 18,
    category: "Floor Rectangular Pots & Troughs",
    scientificName: "Dracaena reflexa 'Song of India'",
    commonName: "Song of India",
    lightSpec: "Bright Light / Partial Sun",
    minPrice: 140,
    maxPrice: 210,
    sizes: [
      { size: "80 cm – 1.0 m height", priceAED: "140 – 210" }
    ],
    description: "Variegated yellow-green foliage on gracefully arching stems. Architectural accent for bright balcony spaces.",
    images: [
      "/images/plants/plant-18-0.jpg",
      "/images/plants/plant-18-1.jpg"
    ]
  },

  // 4. Floor Round Pots & Architectural Containers
  {
    id: 8,
    category: "Floor Round Pots & Architectural Containers",
    scientificName: "Strelitzia nicolai",
    commonName: "White Bird of Paradise",
    lightSpec: "Bright Light / Sheltered from strong winds",
    minPrice: 190,
    maxPrice: 620,
    sizes: [
      { size: "1.2 m – 1.4 m (40 cm Pot)", priceAED: "190 – 290" },
      { size: "1.8 m – 2.0 m (50 cm Pot)", priceAED: "380 – 620" }
    ],
    description: "Stately banana-like broad foliage statement plant for corner focal points on sheltered balconies.",
    images: [
      "/images/plants/plant-8-0.jpg",
      "/images/plants/plant-8-1.jpg",
      "/images/plants/plant-8-2.jpg",
      "/images/plants/plant-8-3.jpg"
    ]
  },
  {
    id: 9,
    category: "Floor Round Pots & Architectural Containers",
    scientificName: "Plumeria obtusa / rubra",
    commonName: "Frangipani / Champa",
    lightSpec: "Extreme Full Sun",
    minPrice: 220,
    maxPrice: 850,
    sizes: [
      { size: "1.2 m – 1.5 m (Single Trunk / Standard)", priceAED: "220 – 350" },
      { size: "1.8 m – 2.0 m (Multi-trunk specimen)", priceAED: "450 – 850" }
    ],
    description: "Highly fragrant flowering architectural tree suited for large corner pots in full sunlight.",
    images: [
      "/images/plants/plant-9-0.jpg",
      "/images/plants/plant-9-1.jpg",
      "/images/plants/plant-9-2.png",
      "/images/plants/plant-9-3.jpg"
    ]
  },
  {
    id: 19,
    category: "Floor Round Pots & Architectural Containers",
    scientificName: "Yucca elephantipes",
    commonName: "Spineless Yucca",
    lightSpec: "Full Sun to Partial Shade",
    minPrice: 130,
    maxPrice: 420,
    sizes: [
      { size: "1.0 m – 1.2 m (Double Cane)", priceAED: "130 – 200" },
      { size: "1.5 m – 1.8 m (Triple Cane)", priceAED: "260 – 420" }
    ],
    description: "Bold sculptural plant with sword-like leaves on thick canes. Exceptionally drought and heat tolerant.",
    images: [
      "/images/plants/plant-19-0.jpg",
      "/images/plants/plant-19-1.jpg"
    ]
  },
  {
    id: 20,
    category: "Floor Round Pots & Architectural Containers",
    scientificName: "Dypsis lutescens",
    commonName: "Areca Palm",
    lightSpec: "Filtered Sun / Bright Indirect",
    minPrice: 140,
    maxPrice: 460,
    sizes: [
      { size: "1.5 m – 1.7 m height", priceAED: "140 – 220" },
      { size: "2.0 m – 2.2 m height", priceAED: "280 – 460" }
    ],
    description: "Graceful feathery fronds creating a tropical ambiance. Excellent natural air purifier for covered balconies.",
    images: [
      "/images/plants/plant-20-0.jpg",
      "/images/plants/plant-20-1.jpg"
    ]
  },
  {
    id: 21,
    category: "Floor Round Pots & Architectural Containers",
    scientificName: "Monstera deliciosa",
    commonName: "Swiss Cheese Plant",
    lightSpec: "Deep Shade / Indirect Light",
    minPrice: 160,
    maxPrice: 260,
    sizes: [
      { size: "80 cm – 1.0 m height (Indoor/Shaded Balcony)", priceAED: "160 – 260" }
    ],
    description: "Iconic split-leaf tropical foliage perfect for shaded balconies and covered outdoor spaces.",
    images: [
      "/images/plants/plant-21-0.jpg",
      "/images/plants/plant-21-1.jpg"
    ]
  },

  // 5. Climbers & Trellis Plants
  {
    id: 10,
    category: "Climbers & Trellis Plants",
    scientificName: "Jasminum sambac",
    commonName: "Arabian Jasmine (Full / Motia)",
    lightSpec: "Full Sun / Partial Shade",
    minPrice: 45,
    maxPrice: 160,
    sizes: [
      { size: "60–80 cm bush/climber", priceAED: "45 – 75" },
      { size: "1.2 m – 1.5 m trained climber", priceAED: "95 – 160" }
    ],
    description: "Intensely scented white blossoms trained along wire trellises or wall mounts.",
    images: [
      "/images/plants/plant-10-0.jpg",
      "/images/plants/plant-10-1.jpg",
      "/images/plants/plant-10-2.jpg",
      "/images/plants/plant-10-3.jpg"
    ]
  },
  {
    id: 22,
    category: "Climbers & Trellis Plants",
    scientificName: "Bougainvillea spectabilis",
    commonName: "Climbing Bougainvillea",
    lightSpec: "Extreme Full Sun",
    minPrice: 65,
    maxPrice: 220,
    sizes: [
      { size: "1.2 m – 1.5 m (Bamboo Frame)", priceAED: "65 – 100" },
      { size: "1.8 m – 2.2 m (Heavy Trellis)", priceAED: "130 – 220" }
    ],
    description: "Vigorous climbing variety producing massive cascades of vivid papery bracts in pink, purple, and red.",
    images: [
      "/images/plants/plant-22-0.jpg",
      "/images/plants/plant-22-1.jpg"
    ]
  },
  {
    id: 23,
    category: "Climbers & Trellis Plants",
    scientificName: "Quisqualis indica",
    commonName: "Rangoon Creeper",
    lightSpec: "Full Sun",
    minPrice: 75,
    maxPrice: 240,
    sizes: [
      { size: "1.2 m – 1.5 m stake", priceAED: "75 – 120" },
      { size: "1.8 m height", priceAED: "150 – 240" }
    ],
    description: "Stunning color-changing flowers from white to pink to deep red. Fragrant blooms attract butterflies.",
    images: [
      "/images/plants/plant-23-0.jpg",
      "/images/plants/plant-23-1.jpg"
    ]
  },
  {
    id: 24,
    category: "Climbers & Trellis Plants",
    scientificName: "Pyrostegia venusta",
    commonName: "Flame Vine",
    lightSpec: "Full Sun",
    minPrice: 85,
    maxPrice: 140,
    sizes: [
      { size: "1.2 m – 1.5 m height", priceAED: "85 – 140" }
    ],
    description: "Spectacular orange tubular flowers cascading in dense clusters during winter. Fast-growing evergreen climber.",
    images: [
      "/images/plants/plant-24-0.jpg",
      "/images/plants/plant-24-1.jpg"
    ]
  },
  {
    id: 25,
    category: "Climbers & Trellis Plants",
    scientificName: "Passiflora edulis / caerulea",
    commonName: "Passion Flower Vine",
    lightSpec: "Full Sun to Moderate Shade",
    minPrice: 70,
    maxPrice: 115,
    sizes: [
      { size: "1.2 m height with frame", priceAED: "70 – 115" }
    ],
    description: "Exotic intricate flowers followed by edible fruit. Fast-growing vine ideal for balcony trellis and pergola coverage.",
    images: [
      "/images/plants/plant-25-0.jpg",
      "/images/plants/plant-25-1.jpg"
    ]
  },

  // 6. Living Wall / Vertical Modular Pockets
  {
    id: 26,
    category: "Living Wall / Vertical Modular Pockets",
    scientificName: "Nephrolepis exaltata",
    commonName: "Boston Fern",
    lightSpec: "Deep Shade / High Moisture",
    minPrice: 18,
    maxPrice: 30,
    sizes: [
      { size: "12 cm – 14 cm insert pot", priceAED: "18 – 30" }
    ],
    description: "Lush, arching fronds that thrive in shaded vertical pockets. Excellent for creating green living walls in humid corners.",
    images: [
      "/images/plants/plant-26-0.jpg",
      "/images/plants/plant-26-1.jpg"
    ]
  },
  {
    id: 27,
    category: "Living Wall / Vertical Modular Pockets",
    scientificName: "Chlorophytum comosum",
    commonName: "Spider Plant",
    lightSpec: "Shade to Partial Sun",
    minPrice: 15,
    maxPrice: 25,
    sizes: [
      { size: "12 cm – 14 cm insert pot", priceAED: "15 – 25" }
    ],
    description: "Resilient arching foliage with baby plantlets. One of the easiest living wall plants, thriving in nearly any light condition.",
    images: [
      "/images/plants/plant-27-0.jpg",
      "/images/plants/plant-27-1.jpg"
    ]
  },
  {
    id: 28,
    category: "Living Wall / Vertical Modular Pockets",
    scientificName: "Syngonium podophyllum",
    commonName: "Arrowhead Vine",
    lightSpec: "Bright Shade",
    minPrice: 18,
    maxPrice: 28,
    sizes: [
      { size: "12 cm – 14 cm insert pot", priceAED: "18 – 28" }
    ],
    description: "Arrow-shaped leaves in shades of green, cream, and pink. Compact grower perfect for vertical pocket systems.",
    images: [
      "/images/plants/plant-28-1.jpg"
    ]
  },
  {
    id: 29,
    category: "Living Wall / Vertical Modular Pockets",
    scientificName: "Tradescantia zebrina",
    commonName: "Wandering Jew",
    lightSpec: "Partial Sun / Indirect Light",
    minPrice: 15,
    maxPrice: 25,
    sizes: [
      { size: "12 cm – 14 cm insert pot", priceAED: "15 – 25" }
    ],
    description: "Striking silver-purple striped foliage that trails beautifully from modular wall pockets. Fast-growing ground cover.",
    images: [
      "/images/plants/plant-29-0.jpg",
      "/images/plants/plant-29-1.jpg"
    ]
  },
  {
    id: 30,
    category: "Living Wall / Vertical Modular Pockets",
    scientificName: "Aglaonema varieties",
    commonName: "Chinese Evergreen",
    lightSpec: "Deep Shade / Sheltered",
    minPrice: 25,
    maxPrice: 40,
    sizes: [
      { size: "14 cm insert pot", priceAED: "25 – 40" }
    ],
    description: "Beautifully patterned foliage in silver, green, and red tones. Thrives in low-light sheltered vertical gardens.",
    images: [
      "/images/plants/plant-30-0.jpg",
      "/images/plants/plant-30-1.jpg"
    ]
  },

  // 7. Compact Tabletop & Balcony Shelf Plants
  {
    id: 31,
    category: "Compact Tabletop & Balcony Shelf Plants",
    scientificName: "Succulent Mix (Echeveria Crassula)",
    commonName: "Assorted Succulents",
    lightSpec: "Morning Sun / Bright Light",
    minPrice: 15,
    maxPrice: 35,
    sizes: [
      { size: "10 cm – 12 cm Decorative Pot", priceAED: "15 – 35" }
    ],
    description: "Curated collection of drought-tolerant rosette succulents in decorative pots. Perfect for sunny shelves and tabletops.",
    images: [
      "/images/plants/plant-31-0.jpg",
      "/images/plants/plant-31-1.jpg"
    ]
  },
  {
    id: 32,
    category: "Compact Tabletop & Balcony Shelf Plants",
    scientificName: "Zamioculcas zamiifolia",
    commonName: "ZZ Plant",
    lightSpec: "Shade / Low Light",
    minPrice: 40,
    maxPrice: 70,
    sizes: [
      { size: "15 cm – 20 cm Pot (Height 40 cm)", priceAED: "40 – 70" }
    ],
    description: "Glossy, dark green leaflets on upright stems. Virtually indestructible – thrives on neglect in low-light conditions.",
    images: [
      "/images/plants/plant-32-0.jpg",
      "/images/plants/plant-32-1.jpg"
    ]
  },
  {
    id: 33,
    category: "Compact Tabletop & Balcony Shelf Plants",
    scientificName: "Peperomia obtusifolia",
    commonName: "Baby Rubber Plant",
    lightSpec: "Shaded Balconies",
    minPrice: 20,
    maxPrice: 35,
    sizes: [
      { size: "12 cm – 15 cm Pot", priceAED: "20 – 35" }
    ],
    description: "Compact, thick-leaved tabletop plant with a waxy sheen. Low-maintenance and perfect for shaded balcony shelves.",
    images: [
      "/images/plants/plant-33-0.jpg",
      "/images/plants/plant-33-1.jpg"
    ]
  },

  // 8. Shrubs
  {
    id: 34,
    category: "Shrubs",
    scientificName: "Plumbago auriculata",
    commonName: "Cape Leadwort",
    lightSpec: "Full sun to partial shade",
    minPrice: 35,
    maxPrice: 55,
    sizes: [
      { size: "25 cm Pot (50–70 cm height)", priceAED: "35 – 55" }
    ],
    description: "Clusters of sky-blue flowers on arching branches. Blooms profusely in UAE heat, adding cool color to hot balconies.",
    images: [
      "/images/plants/plant-34-0.jpg",
      "/images/plants/plant-34-1.jpg"
    ]
  },
  {
    id: 35,
    category: "Shrubs",
    scientificName: "Leucophyllum frutescens",
    commonName: "Texas Sage",
    lightSpec: "Full sun",
    minPrice: 50,
    maxPrice: 85,
    sizes: [
      { size: "30 cm Pot (60–80 cm height)", priceAED: "50 – 85" }
    ],
    description: "Silver-grey foliage with purple blooms triggered by humidity. Extremely drought-tolerant desert shrub.",
    images: [
      "/images/plants/plant-35-0.jpg",
      "/images/plants/plant-35-1.jpg"
    ]
  },
  {
    id: 36,
    category: "Shrubs",
    scientificName: "Adenium obesum",
    commonName: "Desert Rose",
    lightSpec: "Full sun",
    minPrice: 45,
    maxPrice: 85,
    sizes: [
      { size: "20 cm Pot (30–40 cm height)", priceAED: "45 – 85" }
    ],
    description: "Sculptural swollen trunk (caudex) topped with stunning pink-red trumpet flowers. Thrives in extreme heat and drought.",
    images: [
      "/images/plants/plant-36-0.jpg",
      "/images/plants/plant-36-1.jpg"
    ]
  },
  {
    id: 37,
    category: "Shrubs",
    scientificName: "Lantana camara",
    commonName: "Lantana",
    lightSpec: "Full sun",
    minPrice: 15,
    maxPrice: 30,
    sizes: [
      { size: "20 cm Pot (30–40 cm height)", priceAED: "15 – 30" }
    ],
    description: "Multi-colored flower clusters that change color as they age. Butterfly magnet that blooms year-round in UAE.",
    images: [
      "/images/plants/plant-37-0.jpg",
      "/images/plants/plant-37-1.jpg"
    ]
  },
  {
    id: 38,
    category: "Shrubs",
    scientificName: "Ixora coccinea",
    commonName: "Jungle Flame",
    lightSpec: "Partial shade / Morning sun",
    minPrice: 30,
    maxPrice: 55,
    sizes: [
      { size: "25 cm Pot (40–50 cm height)", priceAED: "30 – 55" }
    ],
    description: "Dense clusters of bright red, orange, or yellow star-shaped flowers. Tropical shrub ideal for partially shaded balconies.",
    images: [
      "/images/plants/plant-38-0.jpg",
      "/images/plants/plant-38-1.jpg"
    ]
  },
  {
    id: 40,
    category: "Shrubs",
    scientificName: "Tecoma stans",
    commonName: "Yellow Bells (Tecoma)",
    lightSpec: "Full Sun",
    minPrice: 35,
    maxPrice: 75,
    sizes: [
      { size: "30 cm Pot (60–80 cm height)", priceAED: "35 – 75" }
    ],
    description: "Bright yellow trumpet flowers on fast-growing stems. Heat-loving flowering shrub that thrives in UAE conditions.",
    images: [
      "/images/plants/plant-40-0.jpg",
      "/images/plants/plant-40-1.jpg"
    ]
  },
  {
    id: 45,
    category: "Shrubs",
    scientificName: "Nerium oleander",
    commonName: "Oleander (Dwarf)",
    lightSpec: "Full Sun",
    minPrice: 40,
    maxPrice: 80,
    sizes: [
      { size: "25 cm Pot (50–70 cm height)", priceAED: "40 – 80" }
    ],
    description: "Tough, evergreen shrub with fragrant pink or white flowers. Extremely heat and drought tolerant; perfect for exposed balconies.",
    images: [
      "/images/plants/plant-45-0.png",
      "/images/plants/plant-45-1.jpg"
    ]
  },
  {
    id: 48,
    category: "Shrubs",
    scientificName: "Acalypha wilkesiana",
    commonName: "Copperleaf",
    lightSpec: "Full Sun to Part Shade",
    minPrice: 30,
    maxPrice: 60,
    sizes: [
      { size: "25 cm Pot (50–70 cm height)", priceAED: "30 – 60" }
    ],
    description: "Stunning multicolored foliage in copper, red, and green. Tropical shrub bringing year-round vibrant leaf color.",
    images: [
      "/images/plants/plant-48-0.png",
      "/images/plants/plant-48-1.jpg"
    ]
  },

  // 9. Small Tree
  {
    id: 39,
    category: "Small Tree",
    scientificName: "Olea europaea",
    commonName: "Dwarf Olive Tree",
    lightSpec: "Full sun",
    minPrice: 180,
    maxPrice: 350,
    sizes: [
      { size: "40 cm Pot (100–120 cm height)", priceAED: "180 – 350" }
    ],
    description: "Mediterranean classic with silvery-green foliage. Drought-tolerant specimen tree ideal for sunny balcony focal points.",
    images: [
      "/images/plants/plant-39-0.jpg",
      "/images/plants/plant-39-1.jpg"
    ]
  },
  {
    id: 46,
    category: "Small Tree",
    scientificName: "Hibiscus rosa-sinensis",
    commonName: "Tropical Hibiscus",
    lightSpec: "Full Sun to Part Shade",
    minPrice: 45,
    maxPrice: 120,
    sizes: [
      { size: "30 cm Pot (80–100 cm height)", priceAED: "45 – 120" }
    ],
    description: "Large, showy trumpet flowers in vibrant reds, pinks, and oranges. Iconic tropical flowering tree for warm balconies.",
    images: [
      "/images/plants/plant-46-0.png",
      "/images/plants/plant-46-1.jpg"
    ]
  },

  // 10. Herbs
  {
    id: 42,
    category: "Herbs",
    scientificName: "Salvia rosmarinus",
    commonName: "Rosemary",
    lightSpec: "Full Sun",
    minPrice: 15,
    maxPrice: 35,
    sizes: [
      { size: "15 cm Pot (30–40 cm height)", priceAED: "15 – 35" }
    ],
    description: "Aromatic Mediterranean herb with needle-like leaves. Drought-tolerant culinary essential for sunny balcony herb gardens.",
    images: [
      "/images/plants/plant-42-0.jpg",
      "/images/plants/plant-42-1.jpg"
    ]
  },
  {
    id: 43,
    category: "Herbs",
    scientificName: "Ocimum basilicum",
    commonName: "Sweet Basil",
    lightSpec: "Part Sun / Bright Shade",
    minPrice: 10,
    maxPrice: 25,
    sizes: [
      { size: "12 cm Pot (20–30 cm height)", priceAED: "10 – 25" }
    ],
    description: "Fragrant culinary herb with bright green leaves. Fast-growing annual perfect for balcony kitchen gardens.",
    images: [
      "/images/plants/plant-43-0.png",
      "/images/plants/plant-43-1.jpg"
    ]
  },
  {
    id: 44,
    category: "Herbs",
    scientificName: "Aloe barbadensis",
    commonName: "Aloe Vera",
    lightSpec: "Full Sun to Part Shade",
    minPrice: 15,
    maxPrice: 40,
    sizes: [
      { size: "15 cm Pot (25–35 cm height)", priceAED: "15 – 40" }
    ],
    description: "Medicinal succulent with thick gel-filled leaves. Extremely easy to grow in hot, dry balcony conditions.",
    images: [
      "/images/plants/plant-44-0.png",
      "/images/plants/plant-44-1.jpg"
    ]
  },

  // 11. Creeper
  {
    id: 47,
    category: "Creeper",
    scientificName: "Mandevilla sanderi",
    commonName: "Mandevilla",
    lightSpec: "Morning Sun / Part Shade",
    minPrice: 45,
    maxPrice: 95,
    sizes: [
      { size: "20 cm Pot with support (60–80 cm)", priceAED: "45 – 95" }
    ],
    description: "Tropical vine with large, showy pink trumpet flowers. Ideal for balcony columns, railings, and small trellises.",
    images: [
      "/images/plants/plant-47-0.png",
      "/images/plants/plant-47-1.jpg"
    ]
  },

  // 12. Miscellaneous / Accent
  {
    id: 49,
    category: "Floor Round Pots & Architectural Containers",
    scientificName: "Pandanus baptistii variegata",
    commonName: "Yellow Stripes Pandanus",
    lightSpec: "Full Sun to Part Shade",
    minPrice: 80,
    maxPrice: 180,
    sizes: [
      { size: "30 cm Pot (60–80 cm height)", priceAED: "80 – 180" }
    ],
    description: "Dramatic spiral rosette of yellow-striped leaves. Architectural accent plant adding tropical flair to balcony spaces.",
    images: [
      "/images/plants/plant-49-0.png",
      "/images/plants/plant-49-1.jpg"
    ]
  }
];