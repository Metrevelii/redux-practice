import { createStore } from 'redux';

// 3 Creating reducer function
const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
        };
    }
    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
        };
    }
    return state;
}

//2 Creating store for redux
const store = createStore(counterReducer);


export default store;