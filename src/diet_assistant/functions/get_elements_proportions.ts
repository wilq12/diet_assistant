import { elements } from '../types/elements';
import { elements_proportions } from '../types/elements_proportions';
export function get_elements_proportions(elements: elements): elements_proportions {
    let magnitude = Math.sqrt((elements.proteins*elements.proteins)+(elements.fats*elements.fats)+(elements.carbohydrates*elements.carbohydrates))
    return { proteins: elements.proteins/magnitude, fat: elements.fats/magnitude, carbohydrates: elements.carbohydrates/magnitude }
}