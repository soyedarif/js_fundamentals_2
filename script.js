'use strict'
/*
let hasDriversLicense=false;
const passTest=true;

if(passTest) hasDriversLicense=true;
if(hasDriversLicense) console.log('I can drive');

const interface='Audio';
const private=549;
*/
/*
function logger(){ //function keyword - function name
    console.log('My name is Arif')
}
//calling/running/invoking function
logger();
logger();
logger();

function fruitProcessor(apples,oranges){//apples and oranges are parameters
    console.log(apples,oranges);
    const juice=`Juice with ${apples}apples and ${oranges}oranges`;
    return juice; //the expected result we'll get by return.
}
const applejuice=fruitProcessor(5,0)//parameter value 5 apples, 0 oranges
console.log(applejuice);

const appleOrangeJuice=fruitProcessor(2,4);
console.log(fruitProcessor(2,4));
*/
//function declaration
function calcAge1(birthYear){
    // const age=2037-birthYear;
    return 2037-birthYear;
}
const age1=calcAge1(1991)//parameter value or argument.
console.log(age1);
//function expression
const calcAg2=function (birthYear){ //function without name anonymous function
    return 2037-birthYear;
}
const age2=calcAg2(1992);
console.log(age2)