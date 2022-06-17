import { timestamp } from '../types/timestamp';
import { timespan } from '../types/timespan';

export function timestamp_increase(timestamp: timestamp, timespan: timespan) : timestamp {
    return timestamp+timespan as timestamp
}