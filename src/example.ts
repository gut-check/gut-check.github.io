/**
 * Example usage of the FODMAP app
 * Run with: npx tsx src/example.ts
 */

import {
  foods,
  searchFoods,
  getFoodsByLevel,
  getAlternatives,
  foodCount,
  createDailyBudget,
  addIntake,
  canEatFood,
  getBudgetSummary,
  FoodIntake,
} from "./index";

console.log("=".repeat(60));
console.log("FODMAP Food Tracker - Example Usage");
console.log("=".repeat(60));
console.log(`\nTotal foods in database: ${foodCount}\n`);

// Example 1: Search for a food
console.log("--- Searching for 'apple' ---");
const appleResults = searchFoods("apple");
for (const food of appleResults) {
  console.log(`${food.name}: ${food.overallLevel.toUpperCase()} FODMAP`);
  if (food.alternatives) {
    const alts = getAlternatives(food.id);
    console.log(`  Alternatives: ${alts.map((a) => a.name).join(", ")}`);
  }
}

// Example 2: Show all high FODMAP foods
console.log("\n--- High FODMAP Foods (avoid or limit) ---");
const highFodmap = getFoodsByLevel("high");
console.log(`Found ${highFodmap.length} high FODMAP foods`);
console.log("Examples:", highFodmap.slice(0, 5).map((f) => f.name).join(", "));

// Example 3: Track daily intake and check if you can eat pistachios
console.log("\n--- Daily Tracking Example ---");
console.log("Scenario: You've eaten some foods today, can you still eat pistachios?");

let budget = createDailyBudget(new Date().toISOString().split("T")[0]);

// Add some foods eaten today
const todaysFoods: FoodIntake[] = [
  {
    foodId: "banana_unripe",
    timestamp: new Date(),
    servingSize: { amount: 1, unit: "piece" },
    calculatedLevel: "low",
  },
  {
    foodId: "rice",
    timestamp: new Date(),
    servingSize: { amount: 1, unit: "cup" },
    calculatedLevel: "low",
  },
  {
    foodId: "chicken",
    timestamp: new Date(),
    servingSize: { amount: 150, unit: "g" },
    calculatedLevel: "low",
  },
];

for (const intake of todaysFoods) {
  budget = addIntake(budget, intake);
  const food = foods.find((f) => f.id === intake.foodId);
  console.log(`  Added: ${food?.name}`);
}

const summary = getBudgetSummary(budget);
console.log(`\nBudget status: ${summary.status.toUpperCase()}`);
console.log(`Total FODMAP points used: ${summary.totalUsed}/${summary.totalUsed + summary.totalRemaining}`);

// Now check pistachios
const pistachios = foods.find((f) => f.id === "pistachios")!;
const canEatPistachios = canEatFood(pistachios, budget.intakes);

console.log(`\nCan you eat pistachios? ${canEatPistachios.canEat ? "YES" : "NO"}`);
console.log(`Reason: ${canEatPistachios.reason}`);

// Example 4: What if you had eaten garlic earlier?
console.log("\n--- Different Scenario: After eating garlic ---");
let budget2 = createDailyBudget(new Date().toISOString().split("T")[0]);
budget2 = addIntake(budget2, {
  foodId: "garlic",
  timestamp: new Date(),
  servingSize: { amount: 2, unit: "piece", description: "2 cloves" },
  calculatedLevel: "high",
});

const garlicFood = foods.find((f) => f.id === "garlic")!;
console.log(`You ate: ${garlicFood.name} (${garlicFood.overallLevel} FODMAP)`);

const summary2 = getBudgetSummary(budget2);
console.log(`Budget status after garlic: ${summary2.status.toUpperCase()}`);
console.log(`Fructans used: ${summary2.byType.fructans.used}, remaining: ${summary2.byType.fructans.remaining}`);

// Can you eat onion now?
const onion = foods.find((f) => f.id === "onion")!;
const canEatOnion = canEatFood(onion, budget2.intakes);
console.log(`\nCan you eat onion? ${canEatOnion.canEat ? "YES" : "NO"}`);
console.log(`Reason: ${canEatOnion.reason}`);

// Can you eat carrots?
const carrots = foods.find((f) => f.id === "carrot")!;
const canEatCarrots = canEatFood(carrots, budget2.intakes);
console.log(`\nCan you eat carrots? ${canEatCarrots.canEat ? "YES" : "NO"}`);
console.log(`Reason: ${canEatCarrots.reason}`);

console.log("\n" + "=".repeat(60));
console.log("End of example");
console.log("=".repeat(60));
