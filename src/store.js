import {createStore,combineReducers,applyMiddleware} from "redux"
import {thunk} from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { productDetailsReducer, productReducer } from "./reducers/productReducer";
import { forgotPasswordReducer, profileReducer, userReducer } from "./reducers/useReducers";


const reducer = combineReducers({
    products:productReducer,
    productDetails:productDetailsReducer,
    user:userReducer,
    profile:profileReducer,
    forgotPasword:forgotPasswordReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;
