import { createStore, applyMiddleWare } from "redux";
import thunk from 'redux-thunk'

const initialState = {}

const middleware = [thunk]


