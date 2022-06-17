import { diet_ingredient } from './diet_ingredient';
import { timestamp } from './timestamp';

export type diet_log_entry = { diet_ingredient: diet_ingredient, grams_consumed: number, timestamp: timestamp}