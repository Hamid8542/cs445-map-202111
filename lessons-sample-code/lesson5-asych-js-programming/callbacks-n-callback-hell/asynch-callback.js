/**
 * asynch-callback.js
 * 
 * @author okalu
 * @since 2021-10-31
 */
function func1 ( func2 ) {
    console.log(`func1 prints 1`);
    setTimeout(func2, 1000);
}

function func3 () {
    console.log(`func3 prints 3`);
}

func1(function func2 () {
    console.log(`func2 prints 2`);
});

func3();