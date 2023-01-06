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
/*
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
*/
/*
const friend1='Shakil';
const friend2='Akib';
const friend3='Noyon';

const friends=['Shakil', 'Akib', 'Noyon']; // array is zero based
console.log(friends)

// another way
const years1= new Array(1991,1984,2008,2020); //array works here as a function

console.log(friends[0]);//Shakil
console.log(friends[2]);
console.log(friends.length) //length to count element in the array

console.log(friends[friends.length-1]); //[]expression

// replace Element in array
friends[1]='Jubaer';
// only primitive values are immutable but array is not primitive value. so can always change it. But we can't change the whole array.
// friends=['Galib', 'Juhu', 'Pele']
console.log(friends);

// Arrays can also hold variable, expression, and other array inside
const firstName='Arif';
const arif= [firstName,'Alam', 2023-1996,'Student',friends];
console.log(arif);

//Exercise
function calcAge(birthYear){
    return 2037-birthYear;
    // const age=2037-birthYear;
}
const years=[1990,1996,2001,2010.2014];
//what not to do.
//calcAge(years); 
//what to do
const age1=calcAge(years[0]);
const age2=calcAge(years[1]);
const age3=calcAge(years[2]);
console.log(age1,age2,age3);
const age=[calcAge(years[0]),calcAge(years[1]),calcAge(years[2])];
console.log(age) //funcion can be called from inside an array
*/
// Method- JS built in function, we can apply on array
const friends=['Shakil', 'Akib', 'Noyon'];
//add element
//friends.push('Jay'); //push to add element at the end of an array
const newLength=friends.push('Jay'); //as push is a function it can also return data
friends.unshift('Ria') //unshift to add element at beginning of an array
console.log(newLength)//5
//remove element
friends.pop(); //remove last element
friends.pop(); //remove last element
console.log(friends);
console.log(friends.indexOf('Shakil'))

console.log(friends.includes('Bob'))
// .includes() works with strict equality
friends.unshift('23');
console.log(friends.includes(23));//false because 23 we pushed is a string not a number

if(friends.includes('Ria')){
    console.log('you have a girlfriend')
}