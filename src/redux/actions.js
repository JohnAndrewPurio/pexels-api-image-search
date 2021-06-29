import { STORE_CURRENT_IMAGES } from './action_types'
import axios from 'axios'
import { API_Key, imagePerPage, curatedEndPoint, searchEndPoint, orientation, size } from '../config'

const storeCurrentImages = (payload) => ({
    type: STORE_CURRENT_IMAGES,
    payload: payload
})

export const fetchImagesFromPexel = (query) => {
    return async (dispatch, getState) => {
        const url = query && query.length > 0 ? 
            `${searchEndPoint}?query=${query}&per_page=${String( imagePerPage )}&orientation=${orientation}&size=${size}`
            :`${curatedEndPoint}?orientation=${orientation}&size=${size}&per_page=${String( imagePerPage )}`

        const headers = {
            'Authorization': API_Key,
        }

        const request = {
            method: 'get',
            url: url,
            headers: headers
        }

        try {
            const result = await axios(request)

            dispatch( storeCurrentImages(result.data) )
        } catch(error) {
            console.log(error)
        }
    }
}