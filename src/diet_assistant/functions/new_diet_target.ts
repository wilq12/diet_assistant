import { diet_target } from '../types/diet_target';
import { elements } from '../types/elements';

export function new_diet_target(elements: elements): diet_target {
    return { elements }
}