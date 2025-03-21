let a: string;
a = 'Hello';
let b:number;
b = 10;
console.log(a);
console.log(b);

//? Array
// Union type
let arr: (string| number|boolean)[] = []; // (Bracket for array)
arr.push('Hello', 23,true);
console.log(arr); 