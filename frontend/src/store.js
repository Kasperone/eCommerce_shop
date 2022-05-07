import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import {
	productListReducer,
	productDetailsReducer,
} from "./reducers/productReducers.js"
import { cartReducer } from "./reducers/cartReducers.js"

const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
})

const cartItemsFromStorage = localStorage.getItem("cartItems")
	? JSON.parse(localStorage.getItem("cartItems"))
	: []

const initialState = {
	cart: {
		cartItems: cartItemsFromStorage,
	},
}

const middleware = [thunk]

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
/* eslint-enable */

const store = createStore(
	reducer,
	initialState,
	composeEnhancers(applyMiddleware(...middleware))
)

export default store
