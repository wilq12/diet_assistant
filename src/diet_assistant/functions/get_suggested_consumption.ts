import { diet_ingredient } from '../types/diet_ingredient';
import { state } from '../state';
import { get_current_demand } from './get_current_demand';

export function get_suggested_consumption(diet_ingredient: diet_ingredient) {
    let current_demand = get_current_demand()
    let x = [
        current_demand.proteins/diet_ingredient.elements.proteins*100,
        current_demand.fats/diet_ingredient.elements.fats*100,
        current_demand.carbohydrates/diet_ingredient.elements.carbohydrates*100
    ].filter(v => v > 0)

    return Math.min(...x)
}