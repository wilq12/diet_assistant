import { state } from "../state/state";

export function add_diet_ingredient(diet_ingredient_json: string) {
    state.diet_ingredients.push(JSON.parse(diet_ingredient_json))
}