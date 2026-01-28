// Types
export * from "./types/food";

// Data
export { foods, getFoodsByCategory, getFoodsByLevel, searchFoods, getAlternatives, foodCount } from "./data/foods";

// Utils
export {
  calculateFoodLoad,
  calculateDailyLoad,
  canEatFood,
  getRecommendations,
  createDailyBudget,
  addIntake,
  getBudgetSummary,
} from "./utils/fodmapCalculator";
