/**
 * numbers-reducer.js
 */
const numbers = [1,2,3,4,5];
const reducerAcceptingFunction = (reducer) => {
    return reducer(numbers);
};

const addingReducer = (numbers) => {
    return numbers.reduce((x,y) => (x+y), 5);
};
const multiplyingReducer = (numbers) => {
    return numbers.reduce((x,y) => (x*y), 2);
};

const sum = reducerAcceptingFunction(addingReducer);
console.log(`The sum of the numbers, ${numbers} is ${sum}`);
const product = reducerAcceptingFunction(multiplyingReducer);
console.log(`The product of the numbers, ${numbers} is ${product}`);
