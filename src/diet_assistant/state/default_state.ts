import { new_elements } from '../functions/new_elements';
import { new_diet_target } from '../functions/new_diet_target';
import { timespan_hours } from '../functions/timespan_hours';
import { new_diet_ingredient } from '../functions/new_diet_ingredient';
import { timestamp_now } from '../functions/timestamp_now';
import { diet_log_history } from '../types/diet_log_history';
import { diet_log } from '../types/diet_log';
import { diet_ingredient } from '../types/diet_ingredient';

let na_mase = new_diet_target(new_elements(207, 93, 344))
let na_mase2 = new_diet_target(new_elements(225, 100, 300))
let na_mase_low_carb = new_diet_target(new_elements(257, 93, 294))
let na_mase_low_carb2 = new_diet_target(new_elements(172, 89, 293))
let na_mase_low_carb3 = new_diet_target(new_elements(225, 89, 293))

// todo: review targets

export let default_state = {
    leftovers: new_elements(0, 0, 0),
    current_diet_target: na_mase_low_carb3,
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
        //new_diet_ingredient('pizza ciasto (na razie maka)', new_elements(12.5, 1, 72)),
        new_diet_ingredient('grana padano', new_elements(33, 29, 0)),
        new_diet_ingredient('mutti pulpa', new_elements(1.2, 0.2, 3.9)),
        //new_diet_ingredient('olej rzepakowy', new_elements(0, 100, 0)),
        new_diet_ingredient('polędwica wołowa', new_elements(20.1, 4, 0)),
        new_diet_ingredient('tuńczyk puszka', new_elements(28, 6.5, 0)),
        new_diet_ingredient('borówka amerykańska', new_elements(0, 0.6, 15)),
        new_diet_ingredient('jajko', new_elements(12.56, 9.51, 0.72)),
        new_diet_ingredient('papryka czerwona', new_elements(1.3, 0.5, 6.2, 4.20)),
        new_diet_ingredient('papryka zielona', new_elements(1.1, 0.3, 4.3)),
        new_diet_ingredient('banan', new_elements(1.09, 0.33, 22.84, 12.23)),
        new_diet_ingredient('kefir', new_elements(3.6, 1.5, 4.6, 4.6)),
        //mcd:
        new_diet_ingredient('Hamburger 1a, 7, 10, 11 1017', new_elements(12, 8.2, 29, 6), 109),
        new_diet_ingredient('Cheeseburger 1a, 7, 10, 11 1067', new_elements(13, 10, 26, 5), 114),
        new_diet_ingredient('Big Mac ® 1a, 3, 7,', new_elements(12, 12, 19, 3), 224),
        new_diet_ingredient('McRoyal ® 1a, 7, 10, 11', new_elements(15, 13, 18, 4), 200),
        new_diet_ingredient('WieśMac ® 1a, 3, 7, 10,', new_elements(13, 16, 14, 3), 234),
        new_diet_ingredient('McChicken ® 1a, 3, 7, 10,', new_elements(11, 9.3, 24, 3), 190),
        new_diet_ingredient('Jalapeño Burger 1a, 3, 7, 10,', new_elements(11, 12, 25, 4), 116),
        new_diet_ingredient('Chikker® 1a, 3, 7, 10, 11', new_elements(9.3, 13, 29, 4), 145),
        new_diet_ingredient('Red Chikker 1a, 7, 11 951', new_elements(9.3, 6.5, 32, 6), 146),
        new_diet_ingredient('McDouble ® 1a, 7, 10, 11', new_elements(15, 12, 19, 4), 153),
        new_diet_ingredient('Podwójny McRoyal ® 1a, 7, 10,', new_elements(18, 15, 12, 3), 300),
        new_diet_ingredient('Podwójny WieśMac ® 1a, 3, 7,', new_elements(16, 19, 10, 2), 341),
        new_diet_ingredient('McWrap ® Klasyczny Chrupiący Kurczak 1a,', new_elements(9, 8.6, 23, 3), 261),
        new_diet_ingredient('McWrap ® Bekon DeLuxe Chrupiący Kurczak', new_elements(9.7, 14, 23, 2), 258),
        new_diet_ingredient('Sałatka 110 161 2 27 39', new_elements(1.3, 0.3, 3.7, 2), 150),
        new_diet_ingredient('Sałatka Kurczak Premium 1a, 7 531', new_elements(9.1, 6.7, 6.9, 1), 250),
        //new_diet_ingredient('Oliwa z oliwek 3367 615 7', new_elements(0, 91, 0, 0), NaN),
        //new_diet_ingredient('Sos 1000 wysp 3, 7, 9,', new_elements(1.2, 20, 6.7, 5), 40),
        //new_diet_ingredient('Sos winegret 10 1967 771 9', new_elements(0.3, 52, 2.9, 3), 39),
        //new_diet_ingredient('Sos jogurtowo-koperkowy o niskiej zawartości tłuszczu', new_elements(1.1, 1.4, 11, 8), 41),
        new_diet_ingredient('Kurczak McNuggets ® (4 szt.) 1a,', new_elements(16, 13, 17, 0), 70),
        new_diet_ingredient('Kurczak McNuggets ® (6 szt.) 1a,', new_elements(16, 13, 17, 0), 108),
        new_diet_ingredient('Kurczak McNuggets ® (9 szt.) 1a,', new_elements(16, 13, 17, 0), 158),
        new_diet_ingredient('Kurczak McNuggets ® (20 szt.) 1a,', new_elements(16, 13, 17, 0), 350),
        new_diet_ingredient('Chrupiące marcheweczki 210 147 2 50', new_elements(0.9, 0.2, 9.6, 4), 70),
        new_diet_ingredient('Soczyste jabłuszka 265 185 2 63', new_elements(0.3, 0.2, 14, 10), NaN),
        new_diet_ingredient('McTost ® Pieczarki i Ser 1a,', new_elements(10, 13, 27, 5), 106),
        new_diet_ingredient('McTost ® Bekon i Ser 1a,', new_elements(16, 15, 32, 5), 89),
        new_diet_ingredient('McTost ® Ser 1a, 7, 11', new_elements(12, 9.3, 41, 8), 64),
        new_diet_ingredient('McMuffin ® Jajko 1a, 1b, 3,', new_elements(12, 11, 22, 1), 123),
        new_diet_ingredient('McMuffin ® Jajko i Bekon 1a,', new_elements(13, 11, 19, 1), 131),
        new_diet_ingredient('McMuffin ® Wieprzowy z Jajkiem 1a,', new_elements(14, 14, 16, 1), 163),
        new_diet_ingredient('McMuffin ® Farmerski 1a, 1b, 3,', new_elements(14, 18, 21, 2), 128),
        new_diet_ingredient('McMuffin Twarożek i Rzodkiewka 1a, 1b,', new_elements(7, 11, 20, 2), 136),
        new_diet_ingredient('Kajzerka Kurczak Premium 1a-e, 3, 6,', new_elements(10, 7.7, 25, 2), 220),
        new_diet_ingredient('Kajzerka Kurczak Premium Wieloziarnista 1a-e, 3,', new_elements(10, 9.4, 23, 2), 218),
        new_diet_ingredient('Podwójna Kajzerka Wieprzowa DeLuxe 1a-e, 3,', new_elements(13, 18, 18, 1), 228),
        new_diet_ingredient('Podwójna Kajzerka Wieprzowa DeLuxe Wieloziarnista 1a-e,', new_elements(13, 19, 16, 1), 226),
        new_diet_ingredient('Kajzerka Jajko i Pieczarki 1a-e, 3,', new_elements(8.2, 12, 20, 1), 202),
        new_diet_ingredient('Kajzerka Jajko i Pieczarki Wieloziarnista 1a-e,', new_elements(8.4, 13, 18, 1), 209),
        new_diet_ingredient('Śniadaniowy McWrap® Jajecznica i Bekon 1a,', new_elements(8.7, 7.3, 18, 1), 218),
        new_diet_ingredient('Śniadaniowy McWrap® Jajecznica i Pieczarki 1a,', new_elements(6.6, 7.2, 17, 1), 229),
        new_diet_ingredient('Śniadaniowy McWrap® Jajecznica i Wieprzowina 1a,', new_elements(9.4, 9.9, 16, 1), 241),
        new_diet_ingredient('Placek ziemniaczany* 921 589 7 220', new_elements(2.7, 11, 26, 0), 64),
        new_diet_ingredient('Frytki małe 1210 968 12 289', new_elements(3.4, 14, 36, 0), 79),
        new_diet_ingredient('Frytki średnie 1210 1379 16 289', new_elements(3.4, 14, 36, 0), 114),
        new_diet_ingredient('Frytki duże 1210 1815 22 289', new_elements(3.4, 14, 36, 0), 144),
        //new_diet_ingredient('Keczup 517 88 6 122 21', new_elements(1.4, 0.1, 27, 20), 17),
        //new_diet_ingredient('Sos słodko-kwaśny 1a, 6, 9 724', new_elements(0.4, 1.3, 39, 37), 29),
        //new_diet_ingredient('Sos barbecue 10 691 202 2', new_elements(0.6, 0.9, 38, 30), 29),
        //new_diet_ingredient('Sos musztardowy 3, 10 913 251', new_elements(2, 12, 25, 20), 27),
        //new_diet_ingredient('Sos czosnkowy 3 2919 693 35', new_elements(1.1, 77, 3.6, 2), 24),
        //new_diet_ingredient('Sos śmietanowy 3, 7, 10 1783', new_elements(1.9, 43, 9.2, 8), 25),
       // new_diet_ingredient('Grzanki w saszetce 1a, 6, 7,', new_elements(11, 8, 70, 8), 13)
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