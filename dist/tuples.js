"use strict";
// ts has tuples which is fixed length array where each element has a specific type. it is used when we want to represent a collection of values of different types
// lets say for each user we want to store their name and id. we can use a tuple for this
Object.defineProperty(exports, "__esModule", { value: true });
// 1, 'Mirva'
let user = [1, 'Mirva']; // this is how we can annotate a tuple in TS. we are saying that this is a tuple of a number and a string. now if we try to add a boolean to this tuple, we will get an error because it is not a number or a string
// user[0]. --- if we access the first element of the tuple, we get the number related functions
// user[1]. --- if we access the second element of the tuple, we get the string related functions
//# sourceMappingURL=tuples.js.map