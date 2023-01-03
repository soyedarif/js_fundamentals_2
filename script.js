'use strict'
/*
let hasDriversLicense=false;
const passTest=true;

if(passTest) hasDriversLicense=true;
if(hasDriversLicense) console.log('I can drive');

const interface='Audio';
const private=549;
*/
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