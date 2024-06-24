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





// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.


const findMax = () => {
    let value = [ 3 , 4 , 9 , 1 , 5 ];
    const maxValue = value.reduce( ( prev , curr ) => {  // prev = previous & curr = current
        return prev > curr ? prev : curr;
    } );

    return maxValue;
}
console.log( findMax() );




