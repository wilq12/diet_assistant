import { elements } from '../types/elements';

export function new_elements(proteins: number, fats: number, carbohydrates: number): elements {
    return {proteins, fats, carbohydrates}
}