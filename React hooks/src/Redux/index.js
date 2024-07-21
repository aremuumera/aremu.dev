
import { createStore, combineReducers, applyMiddleware  } from 'redux';
import reduxLogger from 'redux-logger';
// const createStore = redux.createStore
const { createLogger } = reduxLogger;

// this is an action and from here the type is string
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// declaring an action creator which returns an action
function buyCake() {
    // this is an action which is an object with a type property eg strings, number, boolean, 
    return {
        type: BUY_CAKE,
        info: 'First redux action',
    }
}

function buyIceCream() {
    // this is an action which is an object with a type property eg strings, number, boolean, 
    return {
        type: BUY_ICECREAM,
        info: 'Second redux action',
    }
}

// reducer function
// {prevState, action} => newState (this here is a reducer function and we need two argument to write a reducer function)
// prevState = initial state of the application which most be an object with and type of value
// const initialState = {
//         numOfCakes: 10,
//         numOfIceCream: 20,
// }

// this section is for th beginning of multiple reducer 
const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numOfIceCream: 20,
}



// this is a reducer function (describing or showing how the application state will change which is based on the action (type) set to the store)
// const reducer = (state = initialState, action) =>{

//     // this is an action creator which is s function and returns an action type such that (every action must have a type)
//     switch(action.type){
//         case BUY_CAKE: return{
//             ...state,
//             numOfCakes: state.numOfCakes - 1,
//         }
//         case BUY_ICECREAM: return{
//             ...state,
//             numOfIceCream: state.numOfIceCream - 1,
//         }
//         default: return state;
//     }
// }

// the cakereducer and iceCream reducer are multiple reducer to handle their action
const cakeReducer = (state = initialCakeState, action) =>{
    // this is an action creator which is s function and returns an action type such that (every action must have a type)
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1,
        }
        // case BUY_ICECREAM: return{
        //     ...state,
        //     numOfIceCream: state.numOfIceCream - 1,
        // }
        default: return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) =>{
    // this is an action creator which is s function and returns an action type such that (every action must have a type)
    switch(action.type){
        // case BUY_CAKE: return{
        //     ...state,
        //     numOfCakes: state.numOfCakes - 1,
        // }
        case BUY_ICECREAM: return{
            ...state,
            numOfIceCream: state.numOfIceCream - 1,
        }
        default: return state;
    }
}

// the "store"is holding the application state and also the createStore most carry a parameter called the reducer
//this is used for the multiple reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
});

const logger = createLogger()
const store = createStore(rootReducer, applyMiddleware(logger)); 


console.log('initialState',store.getState()) // the get state method will access the state of the app which will print the initial state or the current state
const unsubscribe = store.subscribe(() => console.log('Updated state')) //store will now be registering all the event listeners using the subscribe method which then carries a function
// the store allow the app state to be updated using the dispatch method and to update the app state it need an action (describes what should happen to change the state of the app)... therefore dispatch carries the action has parameter
store.dispatch(buyCake()) // for the action to work we will invoke the action inside the dispatch method
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())
store.dispatch(buyIceCream())



unsubscribe()