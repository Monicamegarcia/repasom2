import { GET_CHARACTERS, GET_CHARACTER_DETAIL } from "./actions-types";
import axios from "axios";

//con fetch

/*export const getCharacters= () => {
   return function (dispatch) {
        fecth ("https://api.narutodb.xyz/character")
        .then (response =>response.json())
        .then (data =>dispatch({type: GET_CHARACTERS, payload: data.characters}))
   }
}
*/
//con axios-forma1, la diferencia con fetch es response.json:

/*export const getCharacters =() => {
    return function (dispatch) {
        axios("https://api.narutodb.xyz/character")
        .then (response =>response.data)
        .then (data=>dispatch({type: GET_CHARACTERS, payload: data.characters}))
    }
}

*/

//con axios-forma 2, de forma asincrona, con promesas: (con fetch tambien se puede hacer esto)

export const getCharacters =() => {
    return async function (dispatch) {
        const response = await axios ("https://api.narutodb.xyz/character")
        return dispatch ({type: GET_CHARACTERS, payload: response.data.characters})
    }
}

export const getCharacterDetail = (id) => {
    return function  (dispatch) {
        axios (`https://api.narutodb.xyz/character/${id}`)
        .then(response => response.data)
        .then (data=>dispatch({type:GET_CHARACTER_DETAIL, payload:data}))
    }
}

//busco la info especifica de un caracter con id