import axios from 'axios'

export const FETCHING_GOATS_START = "FETCHING_GOATS_START"
export const FETCHING_GOATS_SUCCESS = "FETCHING_GOATS_SUCCESS"

export const fetchGoats = () => (dispatch) => {
    dispatch({type: FETCHING_GOATS_START})
    axios.get("https://randomfox.ca/floof/")
    .then( value => {
        console.log('fetching start')
        dispatch({type: FETCHING_GOATS_SUCCESS, payload: value.data.image})
        console.log('fetch success', value)
        console.log('this is value.data', value.data)
    })
    .catch( error => {
        console.log('fetching error', error)
    })
}

const thunk = (store) => (next) => (action) => {
    if (typeof action === "object") {
        next(action)
    } else if (typeof action === "function") {
        action(store.dispatch)
    }
}