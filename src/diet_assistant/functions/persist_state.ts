import { state } from '../state';

export function persist_state() {
    localStorage.setItem('state', JSON.stringify(state))
}