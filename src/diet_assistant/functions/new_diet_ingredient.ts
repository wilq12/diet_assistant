import { elements } from '../types/elements';
import { diet_ingredient } from '../types/diet_ingredient';

export function new_diet_ingredient(name: string, elements: elements): diet_ingredient {
    return { name, elements }
}