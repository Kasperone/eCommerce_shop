import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
// import { composeWithDevTools } from "redux-devtools-extansion"

const reducer = combineReducers({})

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
