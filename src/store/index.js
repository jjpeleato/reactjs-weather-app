import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { city } from './../reducers/city';
import { cities } from './../constants/api';

const initialState = {
    city: cities[0]
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    city,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);