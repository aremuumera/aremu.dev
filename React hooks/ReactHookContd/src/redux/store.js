
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(thunk, logger)));


export default store;
