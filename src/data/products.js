const products = [
  {
    id: 1,

    name: "Rumar Oil",

    slug: "rumar-oil",

    category: "Oil",
    group: "Pain Relief",
    featured: true,

    image: "/products/rumar-oil.png",

    gallery: [
      "/products/rumar-oil.png",
      // "/products/rumar-oil-back.png",
      // "/products/rumar-oil-box.png"
    ],

    shortDescription:
      "Herbal massage oil supporting joint comfort and mobility.",

    description:
      "Rumar Oil is an Ayurvedic massage oil formulated using traditional herbs that support healthy joints and muscles. Regular massage may help maintain flexibility and overall joint wellness.",

    indications: [],
    packSize: "60 ml",
    mrp: 175,

    price: 158,

    dosage:
      "Apply externally on the affected area or as directed by a healthcare professional.",

    storage: "Store in a cool and dry place away from direct sunlight.",

    ingredients: ["Mahanarayan Oil", "Gandhpura Oil", "Nilgiri Oil"],

    benefits: [
      "Supports joint comfort",
      "Supports flexibility",
      "Ideal for massage",
      "Herbal formulation",
    ],
    metaTitle: "",

    metaDescription: "",
    faqs: [
      {
        q: "Can it be used daily?",
        a: "Yes, unless advised otherwise by your healthcare professional.",
      },
    ],
  },

  {
    id: 2,

    name: "Cough-Ex Syrup",

    slug: "anmol-cough-ex-syrup",

    category: "Syrup",
    group: "Respiratory Care",
    featured: true,

    image: "/products/cough-ex-syrup.png",

    gallery: ["/products/cough-ex-syrup.png"],

    shortDescription: "Herbal cough syrup supporting respiratory wellness.",

    description:
      "Anmol Cough-Ex Syrup is an Ayurvedic herbal formulation that helps soothe the throat, relieve cough, reduce congestion and support healthy respiratory function.",
    indications: [],
    packSize: "100 ml",
    mrp: 110,

    price: 99,
    dosage:
      "1–2 teaspoonfuls two to three times daily or as directed by a healthcare professional.",

    storage: "Store in a cool and dry place away from direct sunlight.",

    ingredients: [
      "Vasaka",
      "Kantakari",
      "Mulethi",
      "Baheda",
      "Bharangi",
      "Turmeric",
    ],

    benefits: [
      "Supports respiratory health",
      "Helps relieve cough",
      "Soothes sore throat",
      "Supports mucus clearance",
    ],
    metaTitle: "",

    metaDescription: "",
    faqs: [
      {
        q: "Is it suitable for seasonal cough?",
        a: "It is formulated to support relief from common cough symptoms. Consult your healthcare professional for appropriate use.",
      },
    ],
  },

  {
    id: 3,

    name: "Krush-Stone Tablets",

    slug: "krush-stone-tablets",

    category: "Tablet",
    group: "Kidney Care",
    featured: true,

    image: "/products/krush-stone-tablet.png",

    gallery: ["/products/krush-stone-tablet.png"],

    shortDescription:
      "Ayurvedic tablet supporting urinary and kidney wellness.",

    description:
      "Krush-Stone Tablets are formulated with traditional Ayurvedic herbs that support urinary tract health and promote overall kidney wellness.",
    indications: [],
    packSize: "30 Tablets",
    mrp: 140,

    price: 126,
    dosage:
      "1–2 tablets twice daily after meals or as directed by a healthcare professional.",

    storage: "Store in a cool and dry place away from direct sunlight.",

    ingredients: ["Pashanbhed", "Gokshura", "Varun", "Palash", "Anantmool"],

    benefits: [
      "Supports kidney health",
      "Supports urinary wellness",
      "Promotes healthy urinary flow",
      "Herbal formulation",
    ],
    metaTitle: "",

    metaDescription: "",
    faqs: [
      {
        q: "Can these tablets be taken long term?",
        a: "Use only as advised by your healthcare professional.",
      },
    ],
  },

  {
    id: 4,

    name: "High Glow Capsules",

    slug: "high-glow-capsules",

    category: "Capsule",
    group: "Beauty & Wellness",
    featured: true,

    image: "/products/highglow-capsule.png",

    gallery: ["/products/highglow-capsule.png"],

    shortDescription: "Ayurvedic capsules for healthy skin and natural glow.",

    description:
      "High Glow Capsules combine Ayurvedic herbs known for supporting healthy skin, improving complexion and promoting natural radiance from within.",
    indications: [],
    packSize: "60 Capsules",
    mrp: 299,

    price: 269,
    dosage:
      "One capsule twice daily after meals or as directed by a healthcare professional.",

    storage: "Store in a cool and dry place away from direct sunlight.",

    ingredients: ["Amla", "Aloe Vera", "Manjistha", "Ashwagandha"],

    benefits: [
      "Supports healthy skin",
      "Promotes natural glow",
      "Rich in antioxidants",
      "Supports skin nourishment",
    ],
    metaTitle: "",

    metaDescription: "",
    faqs: [
      {
        q: "How long should I take High Glow Capsules?",
        a: "Follow the duration recommended by your healthcare professional.",
      },
    ],
  },

  {
    id: 5,

    name: "Gynobless",

    slug: "gynobless",

    category: "Syrup",
    group: "Women's Wellness",
    featured: true,

    image: "/products/gynobless-syrup.png",

    gallery: ["/products/gynobless-syrup.png"],

    shortDescription:
      "Ayurvedic formulation supporting women's reproductive health.",

    description:
      "Gynobless is formulated using traditional Ayurvedic herbs that support uterine wellness, menstrual health and overall female reproductive care.",
    indications: [],
    packSize: "450 ml",
    mrp: 255,

    price: 229,
    dosage:
      "1–2 tablets twice daily or as directed by a healthcare professional.",

    storage: "Store in a cool and dry place away from direct sunlight.",

    ingredients: ["Ashoka", "Lodhra", "Tagar", "Dhataki", "Daruharidra"],

    benefits: [
      "Supports uterine health",
      "Supports menstrual wellness",
      "Supports hormonal balance",
      "Herbal formulation",
    ],
    metaTitle: "",

    metaDescription: "",
    faqs: [
      {
        q: "Who can use Gynobless?",
        a: "It is intended for adult women. Please consult a healthcare professional before use.",
      },
    ],
  },

  {
    id: 6,

    name: "Gynocordial Capsules",

    slug: "gynocordial-capsules",

    category: "Capsule",
    group: "Women's Wellness",
    featured: true,

    image: "/products/gynocordial-capsule.png",

    gallery: ["/products/gynocordial-capsule.png"],

    shortDescription:
      "Ayurvedic capsules supporting female reproductive wellness.",

    description:
      "Gynocordial Capsules are based on traditional Ayurvedic formulations that support women's reproductive health, uterine wellness and overall vitality.",
    indications: [],
    packSize: "Strip of 15 Capsules",
    mrp: 120,

    price: 108,
    dosage:
      "One capsule twice daily or as directed by a healthcare professional.",

    storage: "Store in a cool and dry place away from direct sunlight.",

    ingredients: ["Ashoka", "Lodhra", "Classical Ayurvedic Herbs"],

    benefits: [
      "Supports reproductive wellness",
      "Supports uterine strength",
      "Supports menstrual health",
      "Herbal formulation",
    ],
    metaTitle: "",

    metaDescription: "",
    faqs: [
      {
        q: "Can Gynocordial be taken regularly?",
        a: "Take only under the guidance of a healthcare professional.",
      },
    ],
  },

  {
    id: 7,

    name: "Aartho Kare Tablets",

    slug: "aartho-kare-tablets",

    category: "Tablet",
    group: "Pain Relief",
    featured: true,

    image: "/products/aartho-kare-tablet.png",

    gallery: ["/products/aartho-kare-tablet.png"],

    shortDescription: "Ayurvedic tablets supporting joint health and mobility.",

    description:
      "Aartho Kare Tablets combine traditional Ayurvedic herbs that support healthy joints, flexibility and comfortable movement.",
    indications: [],
    packSize: "40 Tablets",
    mrp: 280,

    price: 252,
    dosage:
      "1–2 tablets twice daily after meals or as directed by a healthcare professional.",

    storage: "Store in a cool and dry place away from direct sunlight.",

    ingredients: [
      "Mahayograj Guggul",
      "Shuddha Guggulu",
      "Classical Ayurvedic Herbs",
    ],

    benefits: [
      "Supports joint comfort",
      "Supports flexibility",
      "Supports mobility",
      "Herbal formulation",
    ],
    metaTitle: "",

    metaDescription: "",
    faqs: [
      {
        q: "Can these tablets be used with physiotherapy?",
        a: "Consult your healthcare professional before combining treatments.",
      },
    ],
  },
];

export default products;
