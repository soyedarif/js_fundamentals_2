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
/*
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
*/

// basic way
/*
const calcTip=function(value){
    let tip;
    if(value>=50&&value<=300){
        tip=(value*15)/100
    }else{
        tip=(value*20)/100
    }
    return tip;
}
*/
// ternary way 
// const calcTip1=bill=>bill>=50&&bill<=300?(bill*15)/100:(bill*20)/100;
/*
const tip1=calcTip1(bill[0])
const tip2=calcTip1(bill[1])
const tip3=calcTip1(bill[2])
const tips=[tip1,tip2,tip3]
*/
/*
const bill=[125,555,44];
const tips=[calcTip1(bill[0]),calcTip1(bill[1]),calcTip1(bill[2])]
// const total=[bill[0]+tip1,bill[1]+tip2,bill[2]+tip3]
const total=[calcTip1(bill[0])+bill[0],calcTip1(bill[1])+bill[1],calcTip1(bill[2])+bill[2]];
console.log(tips);
console.log(total);
*/
// Objects
/*
const jonasArray=[
    'Jonas',
    'Schmedmann',
    2023-1991,
    'teacher',
    ['Micheal','Peter','Steven']
]
//in array we can't reference each element by name but we just have access them by index order number
const jonas={
    firstName:'Jonas', //key or property variable name:value,
    lastName:'Schmedmann',
    age:2023-1991,
    job:'Teacher',
    friends: ['Micheal','Peter','Steven']
}
console.log(jonas.lastName); //.real or final property name
console.log(jonas['lastName']) //[] for computed property name

const namekey='Name';
console.log(jonas['first'+namekey])//firstName= Jonas
console.log(jonas['last'+namekey])//lastName= Schmedmann

const interestedIn=prompt('What do you want to know about Jonas? Choose between firstname, lastname,age,job,friends');
// console.log(jonas.interestedIn);
if(jonas[interestedIn]){
    console.log(jonas[interestedIn]); //input keyword job= Teacher

}else{
    console.log('Wrong keyword! Choose between firstname, lastname,age,job,friends')
}
jonas.location='Portugal';
jonas['twitter']='@soyedarif';
console.log(jonas);

//Challenge
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`);
*/
/*
const jonas={
    firstName:'Jonas', //key or property variable name:value,
    lastName:'Schmedmann',
    birthYear:1991,
    job:'Teacher',
    friends: ['Micheal','Peter','Steven'],
    hasDriversLicense:true,

    // calcAge:function(birthYear){ //here function is a property of jonas object(method)
    //     return 2023-birthYear;
    // },
    // calcAge:function(){  //to get birthYear directly from the object
    //     //console.log(this) //jonas object
    //     return 2023-this.birthYear;
    // },
    calcAge:function(){  
        this.age=2043-this.birthYear
        return this.age;
    },
    getSummery:function(){
        return `${this.firstName} is a ${this.age} years old ${this.job}, and he ${this.hasDriversLicense ? 'has a drivers license':'has no drivers license'} `;
    },
};
console.log(jonas)
console.log(jonas.calcAge())
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// console.log(jonas['calcAge'](1996));

//challange
console.log(jonas.getSummery())
*/
//challange
const mark={
    firstName:'Mark',
    lastName:'Miller',
    weight:78,
    height:1.69,
    calcBMI:function(){
        this.bmi=this.weight/this.height**2;
        return this.bmi;
    },
    
}
const john={
    firstName:'John',
    lastName:'Smith',
    weight:92,
    height:1.95,
    calcBMI:function(){
        this.bmi=this.weight/this.height**2;
        return this.bmi;
    },
    
}
mark.calcBMI()
john.calcBMI()
console.log(mark.bmi, john.bmi);
console.log(`${mark.bmi > john.bmi? `${mark.firstName}'s BMI is Higher` : `${john.firstName} has higher BMI`}`);