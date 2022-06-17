import { timestamp } from '../types/timestamp';
import { timespan } from '../types/timespan';

export function timestamp_diff(first: timestamp, second: timestamp): timespan {
    return first-second as timespan
}