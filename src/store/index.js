// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';


const initialState = { counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.amount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});


//2 Creating store for redux
const store = configureStore({
    reducer: counterSlice.reducer
});


export default store;

// // 3 Creating reducer function
// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter,
//         };
//     }
//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter,
//         };
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === 'toggle') {
//         return {
//             // inverting the value: if it was true - becomes false ...
//             showCounter: !state.showCounter,
//             counter: state.counter
//         };
//     }

//     return state;
// }
