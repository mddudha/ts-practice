"use strict";
// enums are list of related constants
Object.defineProperty(exports, "__esModule", { value: true });
// lets say if we wanted to reprsent sizes of a shirt, one way to do so is
// const small = 1;
// const medium = 2;
// const large = 3;
// another way to do is group these in enum
//Pascal Case is used for enum names and camelCase is used for enum members
// in this case we dont need to assign values
// TS assigns values in order starting with 0
// so automaticaaly small = 0, medium = 1 and large = 2
// otherwise we can also explicitly set values for each member of the enum
// enum Size {Small = 1, Medium, Large};
// let mySize: Size = Size.Medium;
// console.log(mySize); // output: 2
// when ts is compiled here and js is generated, it is very verbose
// but if we had the code below, it will generate much less code in js, but we wont be able to access the enum members at runtime
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize); // output: 2
//# sourceMappingURL=enum.js.map