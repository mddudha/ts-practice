// let numbers = [1, 2, '3']; // JS arrays can have multiple types of values. here we have 2 numbers and 1 string, because JS arraya are dynamic
// but if we wanted to pass this array to a function that expects an array of numbers, we will get an error because of the string '3' in the array. 
// so we can use Typescript

// sooooo

let numbers: number[] = [1, 2, 3]; // this is how we can annotate an array in TS. we are saying that this is an array of numbers. now if we try to add a string to this array, we will get an error because it is not a number

// but lets say we had this, an empty array 

let array = []; // this means the array is type any
// so we can 
array[0] = 1;
array[1] = '1';

//the above works
// but if we had this

let array2: number[] = []; // this is an empty array but we are annotating it as an array of numbers. so now if we try to add a string to this array, we will get an error because it is not a number
array2[0] = 1;
// array2[1] = '1'; // this will give an error because we are trying to assign a string to an array of numbers
