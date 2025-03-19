//Function add two  number
function add(num1 :number, num2:number): number{
    return num1 + num2;
}
const result = add(22 ,44);


console.log(result);
console.log('TS start!');
console.log('TS start!');

//TS inference 

let playerName: string;
playerName = 'Paskob';
console.log(playerName);

let footboller;  // Declare
console.log(footboller);

footboller = 'Musa';  // Assign
console.log(footboller);

//?Function
function Player(a:number,b:number):number{
    return a * b;
}

console.log(Player(11,5));
