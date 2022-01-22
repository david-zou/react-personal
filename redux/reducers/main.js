import * as t from "../types"

const main = (state = {
    lightMode: "light",
}, action) => {
    switch(action.type){
        case t.SET_LIGHTMODE:
            return {
                ...state,
                lightMode: action.payload
            }
        default:
            return {...state}
    }
}

export default main