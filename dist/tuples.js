"use strict";
// ts has tuples which is fixed length array where each element has a specific type. it is used when we want to represent a collection of values of different types
// lets say for each user we want to store their name and id. we can use a tuple for this
Object.defineProperty(exports, "__esModule", { value: true });
// 1, 'Mirva'
let user = [1, 'Mirva']; // this is how we can annotate a tuple in TS. we are saying that this is a tuple of a number and a string. now if we try to add a boolean to this tuple, we will get an error because it is not a number or a string
// user[0]. --- if we access the first element of the tuple, we get the number related functions
// user[1]. --- if we access the second element of the tuple, we get the string related functions
// internally these ts tuples are just plain js arrays. so if we compile this using tsc and look at js output, we see normal array in js output.
// the gap with this is, js allows .push method in js file. and we can add a 3rd element and the compiler is not going to complain about it 
// tuples are mostly useful for two values like key and value pair. more than 2 will make code less readable
//# sourceMappingURL=tuples.js.map