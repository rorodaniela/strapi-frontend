import thunk from "redux-thunk"
import { combineReducers, createStore, applyMiddleware } from "redux"
import contactReducer from "./reducers/contact.reducers"

const rootReducer = combineReducers({
  contact: contactReducer,
})

const middlewareEnhancer = applyMiddleware(thunk)

let store = createStore(rootReducer, middlewareEnhancer)

export default store
