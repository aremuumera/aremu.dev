import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';    
import axios from 'axios';

const thunkMiddleware = thunk.default


const initialState = {
    loading: false,
    users:[],
    error: '',
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'


const fetchUsersRequest = () => {
    return{
        type: FETCH_USERS_REQUEST,
    }
}

const fetchUsersSuccess = (users) => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
            ...state,
            loading: true
        }

        case FETCH_USERS_SUCCESS:
            return {
            loading: false,
            users: action.payload,
            error: '',
        }

        case FETCH_USERS_FAILURE:
            return {
            loading: false,
            users: [],
            error: action.payload,
        }
        default:
            return state
    }
}

// defining action creator with redux-thunk to return a function instead of an object

const fetchUsers = () => {
    return function (dispatch) {   
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                // array of users
                const users = res.data.map(user => user.id)
                dispatch(fetchUsersRequest(users))
                fetchUsersSuccess
            })
            .catch(err => {
                //err.message
                // const err = 
                dispatch(fetchUsersFailure(err.message))
            })
    }
}
const store = createStore(reducer, applyMiddleware(thunkMiddleware)); // using and applying the redux-thunk middleware
 store.subscribe(() => console.log(store.getState()))

 store.dispatch(fetchUsers);