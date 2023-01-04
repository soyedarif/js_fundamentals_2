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
/*
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
*/
//Arrow function
/*
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYear,firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement}`
}
console.log(yearsUntilRetirement(1996,"Arif"))
console.log(yearsUntilRetirement(1991,"Jonas"))
*/
/*
function cutFruitPiece(fruit){
    return fruit*4;
}
function fruitProcessor(apples,oranges){//apples and oranges are parameters

    const applePieces=cutFruitPiece(apples);
    const orangePieces=cutFruitPiece(oranges);
    const juice=`Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice; //the expected result we'll get by return.
}

console.log(fruitProcessor(2,3))
*/
/*
const calcAge=function(birthYear){
    return 2037-birthYear;
}
const yearsUntilRetirement = function(birthYear,firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if(retirement>0){
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;//with return execution is done. code after it won't work
        console.log(`${firstName} retires in ${retirement} years`)
    }else{
        console.log(`${firstName} has already retired`)
        return -1;
    }
    // return `${firstName} retires in ${retirement}`
}
console.log(yearsUntilRetirement(1969, "Jonas"));
console.log(yearsUntilRetirement(1988, "Mike"));
*/

const calcAverage=(a,b,c)=>(a+b+c)/3;
const avgScoreDolphine=(85,54,41);
const avgScoreKoalas=(23,34,27);

const checkWinner=function(avgDolphine,avgKoalas){
    if(avgDolphine*2>=avgKoalas){
        console.log(`Dolphine Wins (${avgScoreDolphine} vs ${avgScoreKoalas})`)
    }else if(avgKoalas*2>=avgDolphine){
        console.log(`Koalas Win (${avgScoreKoalas} vs ${avgScoreDolphine})`)
    }else{
        console.log('No One Wins')
    }
}

const winner=checkWinner(avgScoreDolphine,avgScoreKoalas);