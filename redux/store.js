import {createStore, combineReducers } from 'redux';
import reducerCourses from './reducers/reducerCourses';
import reducerCart from './reducers/reducerCart';
import reducerPayment from './reducers/reducerPayment';

const rootReducers = combineReducers({
    courses: reducerCourses,
    cart: reducerCart,
    payments: reducerPayment
})

const store = createStore(rootReducers)

export default store;