import { set_state } from "../state/state"

export function load_state() {
    let s = localStorage.getItem('state')
    if(s != null) set_state(JSON.parse(s))
}