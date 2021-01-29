import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { 
  classesReducer,
  courseReducer,
  postReducer,
  specialityReducer,
  teacherReducer } 
from './reducers'





export default createStore(
  combineReducers({
    classesReducer,
    courseReducer,
    postReducer,
    specialityReducer,
    teacherReducer}),
  composeWithDevTools(applyMiddleware(thunk))
)
