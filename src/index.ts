// primitive types in TS. here w are ANNOTATING our variables with its types
let sales: number = 123_456_789; // a long number can be separated using underscores in ts
let course: string = "TypeScript";
let is_published: boolean = true;
let level; // we are not initialzing the var and leaving it as is. TS assumes that this var is of type any
level = 1;
level = 'a';

// since TS sees this as type any, we can assign level with any vals but that is practically against the point of using TS. so it is advised to avoid the use any as much as possible


// however, we dont always have to annotate our variables because the TS compiler can infer the type based on its value
// for eg. let sales = 123_456_789;

// one more eg
// function render(document) {
//     console.log(document);
// }
// this will say that document implicitlty has 'any' type because the compiler is guessing the type of the document

// but lets say its currently impossible to explicitly declare its type
function render(document: any) { // telling the compiler explicitly that the document has type any
    console.log(document);
}

// but lets say we have a ton of this in our codebase where we use type any