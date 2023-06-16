import { timespan } from '../types/timespan';

export function timespan_hours(hours: number): timespan {
    return hours*60*60*1000 as timespan
}