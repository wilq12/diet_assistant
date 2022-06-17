import { elements } from '../types/elements';
import { timestamp_diff } from './timestamp_diff';
import { timestamp_now } from './timestamp_now';
import { new_elements } from './new_elements';
import { get_elements_consumed_today } from './get_elements_consumed_today';
import { state } from '../state';
import { timespan_hours } from './timespan_hours';

export function get_current_demand(): elements {
    let time_from_wakeup = timestamp_diff(timestamp_now(), state.wakeup_time)+timespan_hours(0.5)
    let p = Math.min(1, time_from_wakeup/state.day_length)
    let elements_consumed_today = get_elements_consumed_today()

    return new_elements(
        (state.current_diet_target.elements.proteins*p)-elements_consumed_today.proteins+state.backlog.proteins, 
        (state.current_diet_target.elements.fats*p)-elements_consumed_today.fats+state.backlog.fats, 
        (state.current_diet_target.elements.carbohydrates*p)-elements_consumed_today.carbohydrates+state.backlog.carbohydrates)
}