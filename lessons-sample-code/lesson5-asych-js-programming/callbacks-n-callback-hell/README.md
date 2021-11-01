# What is a Callback?

## A callback is a function that is passed into another function as an argument to be
executed later.

## Examples:

1. DOMObject.addEventListener("eventName", callbackFunction)
2. setTmeout(callbackFunction, timeInMilliseconds);
3. arrayObject.forEach(callbackFunction)
4. arrayObject.filter(callbackFunction)

# Synchronous versus Asynchronous functions
Callbacks are used in two different ways — in synchronous functions and asynchronous functions.

## Callbacks in synchronous functions
If a function's code executes in a top to bottom, left to right fashion, sequentially, and WAITING until one code has finished before the next line begins, then the code is said to be executing synchronously.

If a function's code executes in a top to bottom, left to right fashion, sequentially, but WITHOUT WAITING until one code has finished before the next line begins, then the code is said to be executing asynchronously. Also know as, Non-blocking.