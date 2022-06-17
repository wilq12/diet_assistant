import { set_state } from '../state';
import { default_state } from '../default_state';

export function reset_state() {
    set_state(default_state)
}