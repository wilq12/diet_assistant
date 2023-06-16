import { state } from "../state/state";
import { diet_ingredient } from "../types/diet_ingredient";

export function get_diet_ingredient_quantities(diet_ingredient: diet_ingredient) {
    if (diet_ingredient.portion_grams != null) {
        return new Array(10).fill(1).map((v, i, a) => (i+1)*diet_ingredient.portion_grams!)
    }
    return state.diet_ingredient_quantities
}