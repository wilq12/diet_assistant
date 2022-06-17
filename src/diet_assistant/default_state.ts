import { new_elements } from './functions/new_elements';
import { new_diet_target } from './functions/new_diet_target';
import { timespan_hours } from './functions/timespan_hours';
import { new_diet_ingredient } from './functions/new_diet_ingredient';
import { timestamp_now } from './functions/timestamp_now';
import { diet_log_history } from './types/diet_log_history';
import { diet_log } from './types/diet_log';

export let default_state = {
    backlog: new_elements(0, 0, 0),
    current_diet_target: new_diet_target(new_elements(135, 92, 377)),//new_elements(103, 92, 377))
    day_length: timespan_hours(0),
    diet_ingredients: [
        new_diet_ingredient('mleko w proszku pelne', new_elements(26, 26, 39)),
        new_diet_ingredient('jablko', new_elements(0.26, 0.17, 11.41)),
        new_diet_ingredient('brokul', new_elements(2.82, 0.37, 4.04)),
        new_diet_ingredient('ziemniak', new_elements(2, 0.1, 16.8)),
        new_diet_ingredient('piers z kurczaka', new_elements(21.8, 3.70, 0)),
        new_diet_ingredient('kapary w zalewie', new_elements(0.8, 0.7, 2.2)),
        new_diet_ingredient('awokado', new_elements(2, 14.66, 8.53)),
        new_diet_ingredient('boczek wedzony', new_elements(12.7, 47.3, 0)),
        new_diet_ingredient('chleb proteinowy', new_elements(21, 12, 13)),
        new_diet_ingredient('ciecierzyca gotowana', new_elements(6.3, 2.4, 15)),
        new_diet_ingredient('pizza ciasto (na razie maka)', new_elements(12.5, 1, 72)),
        new_diet_ingredient('grana padano', new_elements(33, 29, 0)),
        new_diet_ingredient('mutti pulpa', new_elements(1.2, 0.2, 3.9)),
        new_diet_ingredient('olej rzepakowy', new_elements(0, 100, 0)),
        //todo: ser plesniowy
        // todo: sery
    ],
    diet_ingredient_quantities: [
        5,
        10,
        20,
        50,
        100,
        200, 
        500,
    ],
    diet_log: [] as diet_log,
    wakeup_time: timestamp_now(),
    diet_log_history: [] as diet_log_history
}