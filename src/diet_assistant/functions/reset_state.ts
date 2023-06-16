import { default_state } from '../state/default_state';
import { set_state, state } from '../state/state';

export function reset_state() {
    // reset whole state but keep diet_ingredients
    set_state({...default_state, diet_ingredients: state.diet_ingredients})
}