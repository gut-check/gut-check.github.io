import {
  FoodItem,
  FoodIntake,
  FodmapLevel,
  FodmapType,
  DailyFodmapBudget,
  FoodRecommendation,
} from "../types/food";
import { foods, getFoodsByLevel } from "../data/foods";

/**
 * FODMAP Budget Calculator
 *
 * The idea is that you have a "budget" for each FODMAP type per day.
 * Eating low FODMAP foods uses little/no budget.
 * Eating moderate FODMAP foods uses some budget.
 * Eating high FODMAP foods uses a lot of budget.
 *
 * This helps answer: "I've eaten X today, can I still eat pistachios?"
 */

// Budget points per FODMAP level (simplified scoring)
const FODMAP_POINTS: Record<FodmapLevel, number> = {
  low: 0,
  moderate: 1,
  high: 3,
};

// Max points per FODMAP type before symptoms likely
const MAX_DAILY_POINTS_PER_TYPE = 3;

// Total max across all types
const MAX_DAILY_TOTAL_POINTS = 6;

/**
 * Calculate the FODMAP load for a single food intake
 */
export function calculateFoodLoad(food: FoodItem): Record<FodmapType, number> {
  const load: Record<FodmapType, number> = {
    fructose: 0,
    lactose: 0,
    fructans: 0,
    gos: 0,
    sorbitol: 0,
    mannitol: 0,
  };

  // If no specific FODMAP types, use overall level
  if (food.fodmapTypes.length === 0) {
    // Low FODMAP foods contribute nothing
    return load;
  }

  // Add points for each FODMAP type present
  for (const fodmap of food.fodmapTypes) {
    load[fodmap.type] += FODMAP_POINTS[fodmap.level];
  }

  return load;
}

/**
 * Calculate total daily FODMAP load from all intakes
 */
export function calculateDailyLoad(
  intakes: FoodIntake[]
): Record<FodmapType, number> {
  const totalLoad: Record<FodmapType, number> = {
    fructose: 0,
    lactose: 0,
    fructans: 0,
    gos: 0,
    sorbitol: 0,
    mannitol: 0,
  };

  for (const intake of intakes) {
    const food = foods.find((f) => f.id === intake.foodId);
    if (!food) continue;

    const foodLoad = calculateFoodLoad(food);
    for (const type of Object.keys(foodLoad) as FodmapType[]) {
      totalLoad[type] += foodLoad[type];
    }
  }

  return totalLoad;
}

/**
 * Check if eating a specific food would exceed daily budget
 */
export function canEatFood(
  food: FoodItem,
  currentIntakes: FoodIntake[]
): { canEat: boolean; reason: string; remainingBudget: Record<FodmapType, number> } {
  const currentLoad = calculateDailyLoad(currentIntakes);
  const foodLoad = calculateFoodLoad(food);

  // Calculate remaining budget per type
  const remainingBudget: Record<FodmapType, number> = {
    fructose: MAX_DAILY_POINTS_PER_TYPE - currentLoad.fructose,
    lactose: MAX_DAILY_POINTS_PER_TYPE - currentLoad.lactose,
    fructans: MAX_DAILY_POINTS_PER_TYPE - currentLoad.fructans,
    gos: MAX_DAILY_POINTS_PER_TYPE - currentLoad.gos,
    sorbitol: MAX_DAILY_POINTS_PER_TYPE - currentLoad.sorbitol,
    mannitol: MAX_DAILY_POINTS_PER_TYPE - currentLoad.mannitol,
  };

  // Calculate total remaining
  const currentTotal = Object.values(currentLoad).reduce((a, b) => a + b, 0);
  const foodTotal = Object.values(foodLoad).reduce((a, b) => a + b, 0);
  const remainingTotal = MAX_DAILY_TOTAL_POINTS - currentTotal;

  // Check if food would exceed any individual type budget
  for (const type of Object.keys(foodLoad) as FodmapType[]) {
    if (foodLoad[type] > 0 && foodLoad[type] > remainingBudget[type]) {
      return {
        canEat: false,
        reason: `Would exceed your ${type} budget. You've already consumed ${currentLoad[type]} points, and this food adds ${foodLoad[type]} more.`,
        remainingBudget,
      };
    }
  }

  // Check if food would exceed total budget
  if (foodTotal > remainingTotal) {
    return {
      canEat: false,
      reason: `Would exceed your total daily FODMAP budget. You've used ${currentTotal} of ${MAX_DAILY_TOTAL_POINTS} points.`,
      remainingBudget,
    };
  }

  // Safe to eat!
  if (food.overallLevel === "low") {
    return {
      canEat: true,
      reason: "This is a low FODMAP food - safe to eat!",
      remainingBudget,
    };
  }

  if (food.overallLevel === "moderate") {
    return {
      canEat: true,
      reason: `You can eat this in moderation. It will use ${foodTotal} of your remaining ${remainingTotal} daily points.`,
      remainingBudget,
    };
  }

  return {
    canEat: true,
    reason: `You have budget remaining, but this is a high FODMAP food. Consider the portion size carefully.`,
    remainingBudget,
  };
}

/**
 * Get food recommendations based on current daily intake
 * Returns foods that are safe to eat given what's already been consumed
 */
export function getRecommendations(
  currentIntakes: FoodIntake[],
  maxResults: number = 10
): FoodRecommendation[] {
  const recommendations: FoodRecommendation[] = [];
  const currentLoad = calculateDailyLoad(currentIntakes);

  // Always recommend low FODMAP foods
  const lowFodmapFoods = getFoodsByLevel("low");
  for (const food of lowFodmapFoods.slice(0, maxResults / 2)) {
    recommendations.push({
      foodId: food.id,
      reason: "Low FODMAP - always safe",
      remainingBudget: {
        fructose: MAX_DAILY_POINTS_PER_TYPE - currentLoad.fructose,
        lactose: MAX_DAILY_POINTS_PER_TYPE - currentLoad.lactose,
        fructans: MAX_DAILY_POINTS_PER_TYPE - currentLoad.fructans,
        gos: MAX_DAILY_POINTS_PER_TYPE - currentLoad.gos,
        sorbitol: MAX_DAILY_POINTS_PER_TYPE - currentLoad.sorbitol,
        mannitol: MAX_DAILY_POINTS_PER_TYPE - currentLoad.mannitol,
      },
    });
  }

  // Check moderate and high FODMAP foods that might still fit in budget
  const otherFoods = [...getFoodsByLevel("moderate"), ...getFoodsByLevel("high")];

  for (const food of otherFoods) {
    const result = canEatFood(food, currentIntakes);
    if (result.canEat && recommendations.length < maxResults) {
      recommendations.push({
        foodId: food.id,
        reason: result.reason,
        remainingBudget: result.remainingBudget,
      });
    }
  }

  return recommendations;
}

/**
 * Create a daily budget tracker
 */
export function createDailyBudget(date: string): DailyFodmapBudget {
  return {
    date,
    intakes: [],
    totalByType: {
      fructose: 0,
      lactose: 0,
      fructans: 0,
      gos: 0,
      sorbitol: 0,
      mannitol: 0,
    },
  };
}

/**
 * Add a food intake to daily budget
 */
export function addIntake(
  budget: DailyFodmapBudget,
  intake: FoodIntake
): DailyFodmapBudget {
  const food = foods.find((f) => f.id === intake.foodId);
  if (!food) return budget;

  const foodLoad = calculateFoodLoad(food);
  const newTotalByType = { ...budget.totalByType };

  for (const type of Object.keys(foodLoad) as FodmapType[]) {
    newTotalByType[type] += foodLoad[type];
  }

  return {
    ...budget,
    intakes: [...budget.intakes, intake],
    totalByType: newTotalByType,
  };
}

/**
 * Get a summary of remaining budget
 */
export function getBudgetSummary(budget: DailyFodmapBudget): {
  totalUsed: number;
  totalRemaining: number;
  byType: Record<FodmapType, { used: number; remaining: number }>;
  status: "safe" | "caution" | "limit";
} {
  const totalUsed = Object.values(budget.totalByType).reduce((a, b) => a + b, 0);
  const totalRemaining = MAX_DAILY_TOTAL_POINTS - totalUsed;

  const byType = {} as Record<FodmapType, { used: number; remaining: number }>;
  for (const type of Object.keys(budget.totalByType) as FodmapType[]) {
    byType[type] = {
      used: budget.totalByType[type],
      remaining: MAX_DAILY_POINTS_PER_TYPE - budget.totalByType[type],
    };
  }

  let status: "safe" | "caution" | "limit";
  if (totalUsed <= 2) {
    status = "safe";
  } else if (totalUsed <= 4) {
    status = "caution";
  } else {
    status = "limit";
  }

  return {
    totalUsed,
    totalRemaining,
    byType,
    status,
  };
}
