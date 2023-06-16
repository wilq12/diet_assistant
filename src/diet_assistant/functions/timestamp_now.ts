import { timestamp } from '../types/timestamp';

export function timestamp_now(): timestamp {
    var date = new Date()
    return date.getTime() + (date.getTimezoneOffset()*60*1000) as timestamp;
}