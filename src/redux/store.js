import { createStore,applyMiddleware } from 'redux'
import reducer from './reducer.js'
import reduxpromise from 'redux-promise'
import reduxthunk from 'redux-thunk'
const store = createStore(reducer,applyMiddleware(reduxthunk,reduxpromise));

export default store;