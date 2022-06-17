import { elements } from '../types/elements';
import { new_elements } from './new_elements';
import { state } from '../state';

export function get_elements_consumed_today(): elements {
    let elements = new_elements(0, 0, 0);
    for (let diet_log_entry of state.diet_log) {
        elements.proteins += diet_log_entry.diet_ingredient.elements.proteins*diet_log_entry.grams_consumed/100
        elements.fats += diet_log_entry.diet_ingredient.elements.fats*diet_log_entry.grams_consumed/100
        elements.carbohydrates += diet_log_entry.diet_ingredient.elements.carbohydrates*diet_log_entry.grams_consumed/100
    }
    return elements;
}