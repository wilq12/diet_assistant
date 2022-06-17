import { diet_ingredient } from '../types/diet_ingredient';

export function diet_ingredient_array_filter_by_prase(diet_ingredients: diet_ingredient[], phrase: string | null | undefined) {
    if (phrase == null) return diet_ingredients;
    return diet_ingredients.filter(i => i.name.toLowerCase().startsWith(phrase.toLowerCase()))
} 