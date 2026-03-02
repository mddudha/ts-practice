function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    // if i dont specify the return for else it will always return undefined (which is not a number)
    return income * 1.3
}

calculateTax( 10_000);

function returnSum(a: number, b = 5): number {
    if (b < 0) {
        return a;
    }
    return a + b;
}

console.log(returnSum(10));
console.log(returnSum(15, -5));