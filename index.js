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






// 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.


function reverseString(str){
    const reversedString = str.split("").reduce((acc, char) => char + acc, "");
    console.log(reversedString);
}

reverseString("JavaScript");






// 5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.


const filterOddNumbers = () => {

    let arr = [ 2 , 1 , 5 , 8 , 77 , 9 , ];

    let newArr = arr.filter( ( val ) => {
        return val % 2 === 1;
    } )

    return newArr;
}

console.log(filterOddNumbers());






// 6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.


const sumArray = () => {

    let arr = [ 1 , 2 , 3 , 4 , 5 ];

    let sumArr = arr.reduce( ( prev , curr ) => {
        return prev + curr;
    } )

    return sumArr;
}

console.log(sumArray());







// 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.


const sortArray = () => {

    let arr = [ 5 , 3 , 1 , 4 , 0 , -6 ];

    let sortArr = arr.sort();
    return sortArr;
}

console.log(sortArray());








// 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"


function capitalizeFirstLetter(str) {
    output = str.charAt(0).toUpperCase() + str.slice(1);
    return output;
}

console.log(capitalizeFirstLetter("javascript")); // Output: "Hello"


