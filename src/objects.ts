// let employee = { id: 1 };

// employee.name = "John"; // this is totally valid in js because its dynamic


// but in ts

let employee: {
    readonly id: number,
    // name?: string; //this does not make sense, every employee has a name so remove the optional
    name: string,
    retire: (date: Date) => void
} = { 
    id: 1, 
    name: 'John', 
    retire: (date: Date) => {
        console.log(date) 

    }
};


