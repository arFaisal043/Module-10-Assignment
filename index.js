// 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.

const calculateSum = ( a , b ) => {
    return  a + b;
}
console.log( calculateSum( 4 , 6) );


// 2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.


const isEven = (n) => {

    //let n = 4;

    if( n % 2 === 0 ) {
        return true;
    }
    else {
        return false;
    }
}

console.log( isEven( 50 ) );