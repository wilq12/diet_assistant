import { diet_ingredient } from '../types/diet_ingredient';
import { diet_log_entry } from '../types/diet_log_entry';
import { timestamp_now } from './timestamp_now';

export function diet_log_entry_new(diet_ingredient: diet_ingredient, grams_consumed: number, timestamp = timestamp_now()): diet_log_entry {
    return {diet_ingredient, grams_consumed, timestamp}
}