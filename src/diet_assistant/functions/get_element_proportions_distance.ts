import { root } from 'src/utils/root';
import { elements_proportions } from '../types/elements_proportions';


// TODO: fix
// export function get_element_proportions_distance(fist: elements_proportions, second: elements_proportions) {
//     let p = fist.proteins-second.proteins
//     let f = fist.fat-second.fat
//     let c = fist.carbohydrates-second.carbohydrates
//     return Math.sqrt((p*p)+(f*f)+(c*c))
// }

// idk why it works pretty good:
export function get_element_proportions_distance(fist: elements_proportions, second: elements_proportions) {
    let x = 4
    return root(Math.pow(fist.proteins, x)+Math.pow(second.proteins, x), x)
        +root(Math.pow(fist.fat, x)+Math.pow(second.fat, x), x)
        +root(Math.pow(fist.carbohydrates, x)+Math.pow(second.carbohydrates, x), x)
}