export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  category: string;
  image?: string;
  description: string;
  size: string[];
  availability?: { [key: string]: boolean }; // Tersedia atau tidak untuk setiap ukuran
  rating: number;
  reviews: number;
  prices?: { [key: string]: number };
  originalPrices?: { [key: string]: number }; // Harga asli sebelum diskon
  hasDiscount?: { [key: string]: boolean }; // Flag untuk menampilkan diskon per ukuran
  isBestseller?: boolean;
  shopeeLink?: string; // Link Shopee untuk produk
}

export const products: Product[] = [
  {
    id: 1,
    name: "YSL Libre",
    slug: "ysl-libre",
    price: 105000,
    category: "Floral",
    image: "/images/products/ysl-libre.jpg",
    description: "Wangi yang menggambarkan wanita percaya diri dan classy. Perpaduan lavender dan vanilla yang manis tapi tetap tegas bikin aroma ini terasa mewah, tahan lama, dan sangat berkelas. Cocok dipakai siang maupun malam hari.\n\nMain accords: lavender, vanilla, citrus, aromatic, sweet, white floral.",
    size: ["35ml", "50ml"],
    availability: {
      "35ml": true,
      "50ml": false
    },
    rating: 4.9,
    reviews: 156,
    prices: {
      "35ml": 99000,
      "50ml": 185000
    },
    originalPrices: {
      "35ml": 105000,
      "50ml": 185000
    },
    hasDiscount: {
      "35ml": true,
      "50ml": false
    },
    isBestseller: true,
    shopeeLink: "https://shopee.co.id/Ys-L1bree-EDP-35ml-50ml-Perfume-Wanita-lavender-vanilla-citrus-aromatic-sweet-white-floral.-i.475931063.56256180725?extraParams=%7B%22display_model_id%22%3A425561061029%2C%22model_selection_logic%22%3A3%7D"
  },
  {
    id: 2,
    name: "Baccarat",
    slug: "baccarat",
    price: 99000,
    category: "Woody",
    image: "/images/products/baccarat.jpg",
    description: "Aroma yang sangat khas, manis hangat dengan sentuhan woody dan amber yang elegan. Wanginya 'mahal', unik, dan mudah dikenali. Banyak yang bilang ini parfum paling 'auto dipuji'.\n\nMain accords: amber, woody, sweet, warm spicy, aromatic.",
    size: ["35ml", "50ml"],
    availability: {
      "35ml": true,
      "50ml": true
    },
    rating: 4.8,
    reviews: 203,
    prices: {
      "35ml": 99000,
      "50ml": 165000
    },
    originalPrices: {
      "35ml": 99000,
      "50ml": 165000
    },
    hasDiscount: {
      "35ml": false,
      "50ml": false
    },
    shopeeLink: "https://shopee.co.id/BACCARAT-EDP-35ml-50ml-Perfume-Pria-sweet-warm-spicy-aromatic.-i.475931063.53053045665?extraParams=%7B%22display_model_id%22%3A325558107132%2C%22model_selection_logic%22%3A3%7D"
  },
  {
    id: 3,
    name: "Black Opium",
    slug: "black-opium",
    price: 105000,
    category: "Sweet",
    image: "/images/products/black-opium.jpg",
    description: "Wangi kopi dan vanilla yang manis dan hangat. Memberikan kesan sensual dan misterius. Cocok dipakai malam hari, ngedate, atau acara spesial.\n\nMain accords: coffee, vanilla, sweet, warm spicy, white floral.",
    size: ["35ml", "50ml"],
    availability: {
      "35ml": true,
      "50ml": true
    },
    rating: 4.7,
    reviews: 178,
    prices: {
      "35ml": 99000,
      "50ml": 175000
    },
    originalPrices: {
      "35ml": 105000,
      "50ml": 185000
    },
    hasDiscount: {
      "35ml": true,
      "50ml": true
    },
    isBestseller: true,
    shopeeLink: "https://shopee.co.id/BLACKOPIUM-EDP-35ml-FREE-10ml-50ml-Perfume-Wanita-coffee-vanilla-sweet-warm-spicy-white-floral.-i.475931063.57852701888?extraParams=%7B%22display_model_id%22%3A355558181668%2C%22model_selection_logic%22%3A3%7D"
  },
  {
    id: 4,
    name: "Dior Sauvage",
    slug: "dior-sauvage",
    price: 105000,
    category: "Fresh",
    image: "/images/products/dior-sauvage.jpg",
    description: "Wangi fresh yang bersih dan maskulin. Sangat versatile untuk dipakai sehari-hari. Memberikan kesan rapi, dewasa, dan elegan.\n\nMain accords: citrus, fresh spicy, woody, aromatic, amber.",
    size: ["35ml", "50ml"],
    availability: {
      "35ml": true,
      "50ml": true
    },
    rating: 4.8,
    reviews: 245,
    prices: {
      "35ml": 99000,
      "50ml": 175000
    },
    originalPrices: {
      "35ml": 105000,
      "50ml": 185000
    },
    hasDiscount: {
      "35ml": true,
      "50ml": true
    },
    isBestseller: true,
    shopeeLink: "https://shopee.co.id/212-VIP-EDP-35ml-FREE-10ml-50ml-Perfume-Unisex-sweet-fruity-vanilla-tropical-rum.-i.475931063.44853060729?extraParams=%7B%22display_model_id%22%3A385558242594%2C%22model_selection_logic%22%3A3%7D"
  },
  {
    id: 5,
    name: "212 VIP",
    slug: "212-vip",
    price: 105000,
    category: "Sweet",
    image: "/images/products/212-vip.jpg",
    description: "Aroma manis fruity yang fun dan playful. Cocok untuk kamu yang aktif, ceria, dan suka jadi pusat perhatian. Wangi yang bikin suasana jadi lebih hidup.\n\nMain accords: sweet, fruity, vanilla, tropical, rum.",
    size: ["35ml", "50ml"],
    availability: {
      "35ml": true,
      "50ml": true
    },
    rating: 4.6,
    reviews: 134,
    prices: {
      "35ml": 99000,
      "50ml": 175000
    },
    originalPrices: {
      "35ml": 105000,
      "50ml": 185000
    },
    hasDiscount: {
      "35ml": true,
      "50ml": true
    },
    isBestseller: true,
    shopeeLink: "https://shopee.co.id/212-VIP-EDP-35ml-FREE-10ml-50ml-Perfume-Unisex-sweet-fruity-vanilla-tropical-rum.-i.475931063.44853060729?extraParams=%7B%22display_model_id%22%3A385558242594%2C%22model_selection_logic%22%3A3%7D"
  },
  {
    id: 6,
    name: "Aigner Black",
    slug: "aigner-black",
    price: 99000,
    category: "Woody",
    image: "/images/products/aigner-black.jpg",
    description: "Wangi maskulin yang dewasa dan classy. Perpaduan woody dan leather yang bikin kesan mahal dan berkarakter kuat.\n\nMain accords: woody, aromatic, leather, fresh spicy.",
    size: ["35ml", "50ml"],
    availability: {
      "35ml": true,
      "50ml": true
    },
    rating: 4.7,
    reviews: 167,
    prices: {
      "35ml": 99000,
      "50ml": 165000
    },
    originalPrices: {
      "35ml": 99000,
      "50ml": 165000
    },
    hasDiscount: {
      "35ml": false,
      "50ml": false
    },
    shopeeLink: "https://shopee.co.id/Aigner-Black-EDP-35ml-50-ml-Perfume-Pria-woody-aromatic-leather-fresh-spicy.-i.475931063.49706162799?extraParams=%7B%22display_model_id%22%3A385558350939%2C%22model_selection_logic%22%3A3%7D"
  },
  {
    id: 7,
    name: "bvlgari Extreme",
    slug: "bvlgari-extreme",
    price: 99000,
    category: "Fresh",
    image: "/images/products/bvlgari-extreme.jpg",
    description: "Wangi citrus yang sangat segar dan bersih. Cocok untuk aktivitas sehari-hari, kerja, atau cuaca panas. Memberikan kesan rapi dan energik.\n\nMain accords: citrus, green, aromatic, woody, fresh spicy.",
    size: ["35ml", "50ml"],
    availability: {
      "35ml": true,
      "50ml": true
    },
    rating: 4.6,
    reviews: 142,
    prices: {
      "35ml": 99000,
      "50ml": 165000
    },
    originalPrices: {
      "35ml": 99000,
      "50ml": 165000
    },
    hasDiscount: {
      "35ml": false,
      "50ml": false
    },
    shopeeLink: "https://shopee.co.id/bvlg4riExtr3me-EDP-35ml-50ml-Perfume-Pria-citrus-green-aromatic-woody-fresh-spicy.-i.475931063.47506200866?extraParams=%7B%22display_model_id%22%3A277408192100%2C%22model_selection_logic%22%3A3%7D"
  },
  {
    id: 8,
    name: "Giorgio",
    slug: "giorgio",
    price: 105000,
    category: "Fresh",
    image: "/images/products/giorgio.jpg",
    description: "Aroma segar seperti laut dan angin pantai. Wanginya ringan, bersih, dan sangat nyaman dipakai harian.\n\nMain accords: marine, citrus, aromatic, woody, fresh.",
    size: ["35ml", "50ml"],
    availability: {
      "35ml": true,
      "50ml": true
    },
    rating: 4.8,
    reviews: 289,
    prices: {
      "35ml": 99000,
      "50ml": 175000
    },
    originalPrices: {
      "35ml": 105000,
      "50ml": 185000
    },
    hasDiscount: {
      "35ml": true,
      "50ml": true
    },
    isBestseller: true,
    shopeeLink: "https://shopee.co.id/Giorgio-EDP-35ml-FREE-10ml-50ml-Perfume-Unisex-marine-citrus-aromatic-woody-fresh.-i.475931063.41877517412?extraParams=%7B%22display_model_id%22%3A350558266547%2C%22model_selection_logic%22%3A3%7D"
  },
  {
    id: 9,
    name: "Omnia Amethyste",
    slug: "omnia-amethyste",
    price: 99000,
    category: "Floral",
    image: "/images/products/omnia-amethyste.jpg",
    description: "Wangi floral yang lembut dan feminin. Memberikan kesan anggun, kalem, dan sangat nyaman dipakai sehari-hari.\n\nMain accords: floral, green, powdery, musky, fresh.",
    size: ["35ml", "50ml"],
    availability: {
      "35ml": true,
      "50ml": true
    },
    rating: 4.5,
    reviews: 118,
    prices: {
      "35ml": 99000,
      "50ml": 165000
    },
    originalPrices: {
      "35ml": 99000,
      "50ml": 165000
    },
    hasDiscount: {
      "35ml": false,
      "50ml": false
    },
    shopeeLink: "https://shopee.co.id/Omnia-Amethyste-EDP-35ml-50ml-Perfume-Wanita-floral-green-powdery-musky-fresh.-i.475931063.44703139350?extraParams=%7B%22display_model_id%22%3A249167301800%2C%22model_selection_logic%22%3A3%7D"
  },
  {
    id: 10,
    name: "Coco Chanel",
    slug: "coco-chanel",
    price: 99000,
    category: "Woody",
    image: "/images/products/coco-chanel.jpg",
    description: "Aroma khas wanita elegan dan classy. Wanginya dewasa, mewah, dan sangat berkarakter. Cocok untuk acara formal maupun daily classy look.\n\nMain accords: warm spicy, amber, woody, powdery, sweet.",
    size: ["35ml", "50ml"],
    availability: {
      "35ml": true,
      "50ml": true
    },
    rating: 4.9,
    reviews: 312,
    prices: {
      "35ml": 99000,
      "50ml": 165000
    },
    originalPrices: {
      "35ml": 99000,
      "50ml": 165000
    },
    hasDiscount: {
      "35ml": false,
      "50ml": false
    },
    shopeeLink: "https://shopee.co.id/C0co-Ch4nel-EDP-35ml-FREE-10ML-50ml-Perfume-Wanita-warm-spicy-amber-woody-powdery-sweet.-i.475931063.48306189643?extraParams=%7B%22display_model_id%22%3A440561067719%2C%22model_selection_logic%22%3A3%7D"
  }
];

// Helper function untuk mendapatkan harga default per ukuran
export const getDefaultPrices = (slug: string) => {
  const pricesMap: { [key: string]: { [key: string]: number } } = {
    "ysl-libre": { "35ml": 105000, "50ml": 185000 },
    "baccarat": { "35ml": 99000, "50ml": 165000 },
    "black-opium": { "35ml": 105000, "50ml": 185000 },
    "dior-sauvage": { "35ml": 105000, "50ml": 185000 },
    "212-vip": { "35ml": 105000, "50ml": 185000 },
    "aigner-black": { "35ml": 99000, "50ml": 165000 },
    "bvlgari-extreme": { "35ml": 99000, "50ml": 165000 },
    "giorgio-armani-acqua-di-gio": { "35ml": 105000, "50ml": 185000 },
    "omnia-amethyste": { "35ml": 99000, "50ml": 165000 },
    "coco-chanel": { "35ml": 99000, "50ml": 165000 }
  };
  return pricesMap[slug] || {};
};

// Helper function untuk check availability
export const isAvailable = (product: Product, size: string): boolean => {
  return product.availability?.[size] ?? true; // Default true jika tidak ada data availability
};

// Featured products untuk home page (hanya bestseller)
export const featuredProducts = products.filter(product => product.isBestseller);

// Categories
export const categories = ["Semua", "Floral", "Woody", "Sweet", "Fresh"];
