"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    // if i dont specify the return for else it will always return undefined (which is not a number)
    return income * 1.3;
}
calculateTax(10000);
function returnSum(a, b = 5) {
    if (b < 0) {
        return a;
    }
    return a + b;
}
console.log(returnSum(10));
console.log(returnSum(15, -5));
//# sourceMappingURL=functions.js.map