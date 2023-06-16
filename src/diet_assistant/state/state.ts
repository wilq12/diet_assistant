import { default_state } from './default_state';
export let state = default_state

export function set_state(value: any) {
    state = value
}