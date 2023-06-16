import { get_element_proportions_distance } from './get_element_proportions_distance';
import { get_current_demand } from './get_current_demand';
import { get_elements_proportions } from './get_elements_proportions';
import { state } from '../state/state';

export function get_suggested_ingredients() {
    let demand_proportions = get_elements_proportions(get_current_demand())
    return state.diet_ingredients.sort((a, b) => {
        //todo: uwzglednic jak dawno byl spozywany dany posilek, uwglednic poprzednie dni
        
        let boredomFactor = 0.00005;

        let a_boredom = 0
        let b_boredom = 0

        for(let days_ago = 0; days_ago <= 7; days_ago++) {
            let diet_log_history_index = state.diet_log_history.length-days_ago
            if(diet_log_history_index < 0) continue;
            let diet_log = days_ago == 0 ? state.diet_log : state.diet_log_history[diet_log_history_index]
            
            a_boredom += diet_log
                .filter(x => x.diet_ingredient.name == a.name)
                .map(x => x.grams_consumed)
                .reduce((prev, cur) => prev+cur, 0)*boredomFactor

            b_boredom += diet_log
                    .filter(x => x.diet_ingredient.name == b.name)
                    .map(x => x.grams_consumed)
                    .reduce((prev, cur) => prev+cur, 0)*boredomFactor
        }

        return (get_element_proportions_distance(get_elements_proportions(a.elements), demand_proportions)*(1+(a_boredom)))
            -(get_element_proportions_distance(get_elements_proportions(b.elements), demand_proportions)*(1+(b_boredom)))
    }
        )
}