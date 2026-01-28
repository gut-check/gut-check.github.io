/**
 * FODMAP Food Types and Interfaces
 */

// The five FODMAP categories (plus subcategories for polyols)
export type FodmapType =
  | "fructose" // Monosaccharide - found in fruits, honey
  | "lactose" // Disaccharide - found in dairy
  | "fructans" // Oligosaccharide - found in wheat, onion, garlic
  | "gos" // Galacto-oligosaccharides - found in legumes
  | "sorbitol" // Polyol - found in stone fruits
  | "mannitol"; // Polyol - found in mushrooms, cauliflower

// Traffic light system (Monash University standard)
export type FodmapLevel = "low" | "moderate" | "high";

// Food categories for organization
export type FoodCategory =
  | "vegetables"
  | "fruits"
  | "grains"
  | "dairy"
  | "proteins"
  | "nuts_seeds"
  | "legumes"
  | "condiments"
  | "beverages"
  | "sweeteners";

// Serving size with unit
export interface ServingSize {
  amount: number;
  unit: "g" | "ml" | "cup" | "tbsp" | "tsp" | "piece" | "slice" | "cob";
  description?: string; // e.g., "1 medium banana", "5 pods"
}

// FODMAP content for a specific serving
export interface FodmapContent {
  type: FodmapType;
  level: FodmapLevel;
}

// Main food item interface
export interface FoodItem {
  id: string;
  name: string;
  category: FoodCategory;
  imageUrl?: string;

  // FODMAP information at the safe serving size
  overallLevel: FodmapLevel;
  fodmapTypes: FodmapContent[];

  // Serving information
  safeServingSize?: ServingSize; // Low FODMAP serving
  moderateServingSize?: ServingSize; // Moderate FODMAP serving
  highServingThreshold?: ServingSize; // Above this = high FODMAP

  // Additional info
  notes?: string;
  alternatives?: string[]; // IDs of lower-FODMAP alternatives
}

// User's food intake for tracking
export interface FoodIntake {
  foodId: string;
  timestamp: Date;
  servingSize: ServingSize;
  calculatedLevel: FodmapLevel;
}

// Daily FODMAP budget tracking
export interface DailyFodmapBudget {
  date: string; // ISO date string
  intakes: FoodIntake[];
  totalByType: Record<FodmapType, number>; // Accumulated load per type
}

// Recommendation based on current intake
export interface FoodRecommendation {
  foodId: string;
  reason: string;
  remainingBudget: Partial<Record<FodmapType, FodmapLevel>>;
}
