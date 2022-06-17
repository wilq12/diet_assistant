import { get_element_proportions_ditance } from './get_element_proportions_distance';
import { get_current_demand } from './get_current_demand';
import { get_elements_proportions } from './get_elements_proportions';
import { state } from '../state';

export function get_suggested_ingredients() {
    let demand_proportions = get_elements_proportions(get_current_demand())
    return state.diet_ingredients.sort((a, b) => 
        get_element_proportions_ditance(get_elements_proportions(a.elements), demand_proportions)
        -get_element_proportions_ditance(get_elements_proportions(b.elements), demand_proportions))
}