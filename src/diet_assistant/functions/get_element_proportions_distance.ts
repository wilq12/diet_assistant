import { elements_proportions } from '../types/elements_proportions';


// TODO: fix
export function get_element_proportions_ditance(fist: elements_proportions, second: elements_proportions) {
    let p = fist.proteins-second.proteins
    let f = fist.fat-second.fat
    let c = fist.carbohydrates-second.carbohydrates
    return Math.sqrt((p*p)+(f*f)+(c*c))
}

// idk why it works pretty good:
// export function get_element_proportions_ditance(fist: elements_proportions, second: elements_proportions) {
//     return Math.sqrt(Math.pow(fist.proteins, 2)+Math.pow(second.proteins, 2))
//         +Math.sqrt(Math.pow(fist.fat, 2)+Math.pow(second.fat, 2))
//         +Math.sqrt(Math.pow(fist.carbohydrates, 2)+Math.pow(second.carbohydrates, 2))
// }