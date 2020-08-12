import {FETCHING_GOATS_START, FETCHING_GOATS_SUCCESS} from '../actions'

const initialState = {
    photo: '',
    isLoading: false,
    error: ''
}

export const goatReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_GOATS_START:
            return {
                ...state,
                isLoading: true,
                error:''
            }
            case FETCHING_GOATS_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    photo: action.payload
                }
                default:
                    return state
    }
}