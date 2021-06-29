import { STORE_CURRENT_IMAGES } from './action_types'

const initState = {
    currentImages: null
}

export default function reducer(state = initState, action) {
    const {type, payload} = action
    const selector = {}
    selector[STORE_CURRENT_IMAGES] = storeCurrentImages

    if(selector[type] === undefined) return {...state}

    return selector[type](state, payload)
}

function storeCurrentImages(state, payload) {
    return {...state, currentImages: payload}
}