import * as t from "../types"

export const setLightMode = (lightMode) => dispatch => {
    dispatch({
        type: t.SET_LIGHTMODE,
        payload: lightMode
    })
}
