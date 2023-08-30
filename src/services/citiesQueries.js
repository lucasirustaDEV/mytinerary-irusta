import axios from "axios"

const URL_CITY = 'http://localhost:3000/api/cities'

export const getAllCities = async (queryParams = '') => {
    try {
        const response = await axios(URL_CITY + queryParams)
        return response.data.response
    } catch (err) {
        return []
    }
}