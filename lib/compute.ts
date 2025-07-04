/** Shared deterministic helpers used by UI & Edge Functions */
export function calculateMacros(meals: { protein: number; carbs: number; fats: number }[]) {
  return meals.reduce(
    (totals, meal) => ({
      protein: totals.protein + meal.protein,
      carbs: totals.carbs + meal.carbs,
      fats: totals.fats + meal.fats,
    }),
    { protein: 0, carbs: 0, fats: 0 }
  );
}
