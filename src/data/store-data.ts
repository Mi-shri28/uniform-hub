export interface School {
  id: string;
  name: string;
  grades: string[];
}

export interface UniformItem {
  name: string;
  sizes: string[];
  price: number;
  image?: string;
}

export interface UniformRequirement {
  schoolId: string;
  grade: string;
  items: UniformItem[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image?: string;
  sizes?: string[];
  description?: string;
}

export const WHATSAPP_NUMBER = "919876543210";

export const schools: School[] = [
  { id: "svs", name: "SVS High School", grades: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
  { id: "pms", name: "Primary Model School", grades: ["1", "2", "3", "4", "5", "6", "7", "8"] },
  { id: "ghs", name: "Government High School", grades: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
  { id: "svm", name: "Sardar Vallabhbhai Vidyalaya", grades: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] },
  { id: "nps", name: "Navjivan Primary School", grades: ["1", "2", "3", "4", "5"] },
];

export const uniformRequirements: UniformRequirement[] = [
  {
    schoolId: "svs",
    grade: "1",
    items: [
      { name: "White Shirt", sizes: ["22", "24", "26", "28"], price: 350 },
      { name: "Navy Blue Pants", sizes: ["22", "24", "26", "28"], price: 400 },
      { name: "School Tie", sizes: ["Standard"], price: 150 },
      { name: "White Socks (Pair)", sizes: ["S", "M"], price: 80 },
      { name: "School Belt", sizes: ["S", "M"], price: 120 },
    ],
  },
  {
    schoolId: "svs",
    grade: "5",
    items: [
      { name: "White Shirt", sizes: ["28", "30", "32", "34"], price: 400 },
      { name: "Navy Blue Pants", sizes: ["28", "30", "32", "34"], price: 450 },
      { name: "School Tie", sizes: ["Standard"], price: 150 },
      { name: "White Socks (Pair)", sizes: ["M", "L"], price: 90 },
      { name: "School Belt", sizes: ["M", "L"], price: 130 },
    ],
  },
  {
    schoolId: "svs",
    grade: "10",
    items: [
      { name: "White Shirt", sizes: ["34", "36", "38", "40"], price: 450 },
      { name: "Navy Blue Pants", sizes: ["30", "32", "34", "36"], price: 500 },
      { name: "School Tie", sizes: ["Standard"], price: 150 },
      { name: "White Socks (Pair)", sizes: ["L", "XL"], price: 100 },
      { name: "School Belt", sizes: ["L", "XL"], price: 140 },
    ],
  },
  {
    schoolId: "pms",
    grade: "1",
    items: [
      { name: "Sky Blue Shirt", sizes: ["20", "22", "24", "26"], price: 320 },
      { name: "Grey Shorts", sizes: ["20", "22", "24", "26"], price: 350 },
      { name: "White Canvas Shoes", sizes: ["5", "6", "7", "8"], price: 450 },
    ],
  },
  {
    schoolId: "ghs",
    grade: "1",
    items: [
      { name: "White Shirt", sizes: ["22", "24", "26"], price: 300 },
      { name: "Khaki Pants", sizes: ["22", "24", "26"], price: 380 },
      { name: "School Badge", sizes: ["Standard"], price: 50 },
    ],
  },
  {
    schoolId: "svm",
    grade: "1",
    items: [
      { name: "Light Blue Shirt", sizes: ["22", "24", "26", "28"], price: 340 },
      { name: "Dark Blue Pants", sizes: ["22", "24", "26", "28"], price: 400 },
      { name: "Red Tie", sizes: ["Standard"], price: 130 },
    ],
  },
  {
    schoolId: "nps",
    grade: "1",
    items: [
      { name: "Yellow T-Shirt", sizes: ["20", "22", "24"], price: 280 },
      { name: "Brown Shorts", sizes: ["20", "22", "24"], price: 300 },
    ],
  },
];

// Helper: get uniform for any school/grade combo — falls back to closest match
export function getUniformItems(schoolId: string, grade: string): UniformItem[] {
  const exact = uniformRequirements.find(u => u.schoolId === schoolId && u.grade === grade);
  if (exact) return exact.items;
  // Fallback: find same school, any grade
  const sameSchool = uniformRequirements.find(u => u.schoolId === schoolId);
  if (sameSchool) return sameSchool.items;
  return [];
}

export const productCategories = [
  { id: "uniforms", name: "School Uniforms", icon: "👔" },
  { id: "winter", name: "Winter Wear", icon: "🧥" },
  { id: "blankets", name: "Blankets", icon: "🛏️" },
  { id: "mens", name: "Men's Clothing", icon: "👕" },
];

export const products: Product[] = [
  // School Uniforms
  { id: "u1", name: "White School Shirt", category: "uniforms", price: 350, sizes: ["22", "24", "26", "28", "30", "32", "34", "36", "38", "40"], description: "Premium cotton white shirt suitable for all schools" },
  { id: "u2", name: "Navy Blue Pants", category: "uniforms", price: 450, sizes: ["22", "24", "26", "28", "30", "32", "34", "36"], description: "Durable navy blue school pants" },
  { id: "u3", name: "Grey School Shorts", category: "uniforms", price: 320, sizes: ["20", "22", "24", "26", "28"], description: "Comfortable grey shorts for primary students" },
  { id: "u4", name: "School Tie (Assorted)", category: "uniforms", price: 150, sizes: ["Standard"], description: "Ties available for all major schools" },
  { id: "u5", name: "White Canvas Shoes", category: "uniforms", price: 550, sizes: ["5", "6", "7", "8", "9", "10"], description: "Sturdy white canvas shoes" },
  { id: "u6", name: "School Belt", category: "uniforms", price: 130, sizes: ["S", "M", "L"], description: "Black school belt with buckle" },

  // Winter Wear
  { id: "w1", name: "School Sweater (Navy)", category: "winter", price: 650, sizes: ["24", "26", "28", "30", "32", "34", "36", "38"], description: "Warm navy blue school sweater" },
  { id: "w2", name: "Fleece Jacket", category: "winter", price: 850, sizes: ["S", "M", "L", "XL"], description: "Cozy fleece jacket for winter" },
  { id: "w3", name: "Woolen Muffler", category: "winter", price: 250, sizes: ["Standard"], description: "Soft woolen muffler" },
  { id: "w4", name: "Thermal Inner Wear", category: "winter", price: 400, sizes: ["S", "M", "L", "XL"], description: "Warm thermal set for cold days" },

  // Blankets
  { id: "b1", name: "Single Bed Blanket", category: "blankets", price: 800, description: "Soft single bed blanket" },
  { id: "b2", name: "Double Bed Blanket", category: "blankets", price: 1200, description: "Premium double bed blanket" },
  { id: "b3", name: "Baby Blanket", category: "blankets", price: 450, description: "Gentle baby blanket in pastel colors" },

  // Men's Clothing
  { id: "m1", name: "Cotton Kurta", category: "mens", price: 600, sizes: ["S", "M", "L", "XL", "XXL"], description: "Comfortable cotton kurta" },
  { id: "m2", name: "Formal Shirt", category: "mens", price: 550, sizes: ["38", "40", "42", "44"], description: "Crisp formal shirt" },
  { id: "m3", name: "Casual T-Shirt", category: "mens", price: 350, sizes: ["S", "M", "L", "XL"], description: "Everyday casual t-shirt" },
  { id: "m4", name: "Track Pants", category: "mens", price: 450, sizes: ["S", "M", "L", "XL", "XXL"], description: "Comfortable track pants" },
];

export function getWhatsAppUrl(productName: string, size?: string): string {
  const message = size
    ? `Hello, I want to order ${productName}, Size: ${size}`
    : `Hello, I want to order ${productName}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppGeneralUrl(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I'd like to know more about your products.")}`;
}
