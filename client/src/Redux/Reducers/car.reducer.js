import { GET_CARS } from "../Actions/car.action"

const initialState= {
    cars:[]
}

export const CarReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_CARS:
            return {
            ...state,
            cars : [...state.cars , action.payload]
        }
        default:
            return state
    }
}