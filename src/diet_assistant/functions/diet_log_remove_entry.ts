import { diet_log_entry } from '../types/diet_log_entry';
import { state } from '../state/state';

export function diet_log_remove_entry(entry: diet_log_entry) {
    state.diet_log = state.diet_log.filter(e => e != entry)
}