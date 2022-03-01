import axios from 'axios'

export const GET_CARS = 'GET_CARS'



export const getCarsThunk = () => {
    return async dispatch => {
        const response = await axios.get('http://localhost:5000/cars')
        dispatch({
            type: GET_CARS,
            payload: response.data
        })
    }
}