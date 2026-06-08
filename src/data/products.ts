export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  benefits: string[];
  ingredients?: string;
  dosage?: string[];
  safetyInfo?: string[];
  storage?: string[];
  fssai?: string;
  variants?: {
    weight: string;
    price: number;
    image?: string;
    images?: string[];
    dosage?: string[];
    safetyInfo?: string[];
    storage?: string[];
    specifications?: Record<string, string>;
  }[];
}


export const products: Product[] = [
  {
    id: "1",
    name: "Premium Spirulina Powder",
    description:
      "Pure spirulina powder packed with proteins, vitamins, and minerals. Rich in antioxidants and chlorophyll.",
    price: 899,
    image: "/images/spirulina-powder.jpg",
    category: "Spirulina",
    benefits: [
      "High Protein Content",
      "Rich in Iron",
      "Boosts Immunity",
      "Natural Energy",
    ],
    fssai: "10725998000370",
    variants: [
      {
        weight: "200g",
        price: 299,
        image: "/images/spirulina-powder.jpg",
        images: ["/images/spirulina-powder.jpg"],
        dosage: [
          "1 teaspoon (3g) daily",
          "Mix with water, juice or smoothies",
          "Maintain consistency for best effects"
        ],
        safetyInfo: [
          "Not recommended for pregnant or lactating women.",
          "Individuals with medical conditions should consult a physician.",
          "This product is not intended to diagnose, treat, cure, or prevent any disease."
        ],
        storage: [
          "Store in a cool, dry place away from sunlight.",
          "Keep container tightly closed."
        ],
        specifications: {
          "Batch No": "SP - 001",
          "Mfg Date": "March 2026",
          "Exp Date": "Feb 2028",
          "MRP": "₹299.00"
        }
      },
      {
        weight: "500g",
        price: 599,
        image: "/images/spirulina-powder.jpg",
        images: ["/images/spirulina-powder.jpg"],
        dosage: [
          "1 teaspoon (3g) daily",
          "Mix with water, juice or smoothies",
          "Maintain consistency for best effects"
        ],
        safetyInfo: [
          "Not recommended for pregnant or lactating women.",
          "Individuals with medical conditions should consult a physician.",
          "This product is not intended to diagnose, treat, cure, or prevent any disease."
        ],
        storage: [
          "Store in a cool, dry place away from sunlight.",
          "Keep container tightly closed."
        ],
        specifications: {
          "Batch No": "SP - 001",
          "Mfg Date": "March 2026",
          "Exp Date": "Feb 2028",
          "MRP": "₹599.00"
        }
      }
    ]
  },
  {
    id: "2",
    name: "Spirulina Tablets",
    description:
      "Convenient spirulina tablets for daily nutrition. Easy to consume and perfect for busy lifestyles.",
    price: 199,
    image: "/images/spirulina-tablets.jpeg",
    category: "Spirulina",
    benefits: [
      "Convenient Dosage",
      "Digestive Health",
      "Antioxidant Rich",
      "100% Natural",
    ],
    ingredients: "Arthrospira platensis – 500 mg",
    dosage: [
      "Children: 1 Tablet twice a day",
      "Adult: 2 Tablets twice a day"
    ],
    safetyInfo: [
      "Not recommended for pregnant or lactating women.",
      "Individuals with medical conditions should consult a physician.",
      "This product is not intended to diagnose, treat, cure, or prevent any disease."
    ],
    storage: [
      "Store in a cool, dry place away from sunlight.",
      "Keep container tightly closed."
    ]
  },

  {
    id: "3",
    name: "Spirulina Mother Culture",
    description:
      "Live spirulina culture for growing your own fresh spirulina at home. Includes growing instructions.",
    price: 300,
    image: "/images/spirulina-culture.jpg",
    category: "Spirulina",
    benefits: ["Fresh Harvest", "Cost Effective", "Educational", "Sustainable"],
  },
  {
    id: "4",
    name: "Moringa Powder",
    description:
      "Premium moringa leaf powder from natural farms. Known as the 'miracle tree' for its nutritional benefits.",
    price: 649,
    image: "/images/Powder-Banner-200g.jpeg",
    category: "Moringa",
    benefits: [
      "92 Nutrients",
      "Anti-inflammatory",
      "Blood Sugar Support",
      "Energy Boost",
    ],
    fssai: "10725998000370",
    variants: [
      {
        weight: "200g",
        price: 199,
        image: "/images/Powder-Banner-200g.jpeg",
        images: [
          "/images/Powder-Banner-200g.jpeg",
        ],

        dosage: [

          "1 teaspoon (3g) daily",
          "Mix with water, juice or smoothies",
          "Maintain consistency for best effects"
        ],
        safetyInfo: [
          "Not recommended for pregnant or lactating women.",
          "Individuals with medical conditions should consult a physician.",
          "This product is not intended to diagnose, treat, cure, or prevent any disease."
        ],
        storage: [
          "Store in a cool, dry place away from sunlight.",
          "Keep container tightly closed."
        ],
        specifications: {
          "Batch No": "MP - 001",
          "Mfg Date": "March 2026",
          "Exp Date": "Feb 2028",
          "MRP": "₹199.00"
        }
      },

      {
        weight: "500g",
        price: 399,
        image: "/images/Powder Package.jpeg",
        images: [
          "/images/Powder banner.jpeg",
          "/images/Powder Package.jpeg"
        ],

        dosage: [
          "1 teaspoon (3g) daily",
          "Mix with water, juice or smoothies",
          "Maintain consistency for best effects"
        ],

        safetyInfo: [
          "Not recommended for pregnant or lactating women.",
          "Individuals with medical conditions should consult a physician.",
          "This product is not intended to diagnose, treat, cure, or prevent any disease."
        ],
        storage: [
          "Store in a cool, dry place away from sunlight.",
          "Keep container tightly closed."
        ],
        specifications: {
          "Batch No": "MP - 001",
          "Mfg Date": "March 2026",
          "Exp Date": "Feb 2028",
          "MRP": "₹399.00"
        }
      }

    ]
  },


  {
    id: "5",
    name: "Moringa Dry Leaves",
    description:
      "Naturally dried moringa leaves perfect for teas and cooking. Retains all natural nutrients.",
    price: 120,
    image: "/images/moringa-leaves.jpg",
    category: "Moringa",
    benefits: ["Natural Tea", "Cooking Ingredient", "Vitamin Rich", "Natural"],
  },
  {
    id: "6",
    name: "Moringa Tablets",
    description:
      "Concentrated moringa tablets providing all the benefits of moringa in convenient tablet form.",
    price: 149,
    image: "/images/moringa-tablets.jpeg",
    category: "Moringa",
    benefits: [
      "Easy Consumption",
      "Concentrated Nutrition",
      "Daily Supplement",
      "Vegan Friendly",
    ],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};
