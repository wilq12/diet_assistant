import { state } from '../state/state';
import { get_current_demand } from './get_current_demand';
import { timestamp_now } from './timestamp_now';

export function initialize_new_day() {
    state.leftovers = get_current_demand()
    state.wakeup_time = timestamp_now()
    state.diet_log_history.push(state.diet_log)
    state.diet_log = []
}