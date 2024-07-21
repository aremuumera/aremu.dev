import { combineReducers } from "redux";
import cakeReducer from "./cakes/CakeReducer";
import iceCreamReducer from "./IceCream/IceCreamReducer";
import userReducer from "./User/UserReducers";

// import sweetReducer from "./sweet/SweetReducer";


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
    // sweet: sweetReducer
})

export default rootReducer
