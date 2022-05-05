import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { productListReducer } from "./reducers/productReducers.js"

const reducer = combineReducers({
	productList: productListReducer,
})

const initialState = {}

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
