
// console.log("hello world");



/*var number = 5 
abcd*/


// var number = 5 // in line comment 

// number = 99

// let theName= "smart"

// const pi=3.14


// a+=1
// a++
// a-=2
// a--
// a*=3
// a/+2



// var a;
// var b =2;
// a = 7;
// b = a;
// var c = a+b;
// c++;
// console.log(c);


// var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
// console.log(myStr);

// var length;
// length = myStr.length;
// console.log(length);

// firstLetterOfMyString = myStr[0]; //0 is the first letter
// console.log(firstLetterOfMyString);


// var ourArray = [50,60,70];
// var ourData =ourArray[0];

// var myArray = [50,60,70];

// var myData = myArray[2];
// console.log(myData)

// myArray[0] = 5;

// console.log(myArray)


// var myArray2 = [[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14]];
// var myData2 = myArray2[2][1];
// console.log(myData2);


// var ourArray = ["stinson","J","cat"];
// ourArray.push(["happy","joy"]);             // add to the array 
// console.log(ourArray);


// var myArray = [["John",23],["cat",2]];
// myArray.push(["dog",3]);
// console.log(myArray)

// var ourArray = [1,2,3];

// var removedFromOurArray = ourArray.pop();  //remove last entry of the array

// var myArray = [["John",23],["cat",2]];

// var removedFromMyArray = myArray.pop();

// console.log(ourArray);
// console.log(removedFromMyArray);



// var ourArray = ["Stimpson","J","cat"];
// ourArray.shift();                       //remove 1st arry 
// ourArray.unshift("Happy");              // add first array happy
// console.log(ourArray);

// var myArray = [["John",23],["cat",2]];
// myArray.shift();
// myArray.unshift(["paul", 35])
// // console.log(myArray)

// var myList = [["cereal",3],["milk",2],["Banana", 12],["juice",2]]

// let course = {
//     name: 'JavaScript ',
//     hours: 10
// };
// console.log(course);
// console.log(course.name);
// console.log(course["hours"]);

// course['name'] = "JavaScript 101"

// console.log(course.name);

// let property = 'hours';
// console.log(course[property]);


// function sayHi(name){               //name parameter variable
//     console.log("Hi! " + name);
// }
// sayHi("steven")


// function multiply(num1,num2){
//     return num1 *num2;
// }
// console.log(multiply(2,2))


// let num1 = 13;
// let num2 = 14;

// const isNumber1GreaterOrEqualto = num1 >= num2;

// console.log(isNumber1GreaterOrEqualto);



// let a = 2;
// let b = "2";

// console.log(a==b);  // (loose equality) does not check data type


// console.log(a===b); //(strict equality) doesnot convert data type

                        //  always use strict equality ===

// let age = 15;
// const canDrive = age >= 16 ? true : false;
// console.log(canDrive);


// let points = 110;
// const customerType = points > 100 ? "gold" : "silver";
// console.log(customerType)



// || (or operator)
// && (and operator)
// ! (not)
// ?? (null coalescing)


// console.log(true||true);  //true
// console.log(false||true); //true
// console.log(true||false); //true
// console.log(false||false); //false


// console.log(true&&true);  //true
// console.log(false&&true); //false
// console.log(true&&false); //false
// console.log(false&&false); //false


// let a =null;
// const result  = a ?? false;  // ?? = a!==null && a!== undefined ? a : false;
// console.log(result);

// let priceOfChocolate = 1.99;
// let hasAmountInCash = 1;


// if (hasAmountInCash >= priceOfChocolate){
//     console.log("Enjoy the chocolate");
// } else{
//     console.log("Sorry not enough money");
// }

// let hour =19;

// if (hour >= 6 && hour <= 12)
//     console.log("serving Breakfast");
//  else if (hour = 12 && hour <= 14)
//     console.log("Serving lunch");
// else
//     console.log("serving Dinner");


// let job = "Software Developer";
 
// if (job === "Software Developer"){
//     console.log("writes code");
// } else if (job === "Designer") {
//     console.log("makes user Interface");
// } else if (job === "Cloud Engineer"){
//     console.log("Manages and deplous cloud resources");
// } else {
//     console.log("works with customers")
// }






// switch(job){
//     case "Software Developer":
//         console.log("writes code");
//         break;
//     case "Designer":
//         console.log("makes user Interface");
//         break;
//     case "Cloud Engineer":
//         console.log("Manages and deplous cloud resources");
//         break;
//     default:
//         console.log("works with customers")
// }


// for loops

// let numbers = [1,2,3,4,5,6,7];


// for(let idx = 0; idx < numbers.length; idx++){
//     console.log(numbers[idx]);
// }


// for (let num= 0 ; num<100; num++){
//     console.log(num);
// }



//while loops

// let numbers = [1,2,3,4,5,6,7];
// let idx = 0;
// while (idx < numbers.length){
//     console.log(numbers[idx]);

//     idx++
// }


// let sum = 0;
// while (true){
//     console.log("loop");
//     sum++;

//     if (sum === 10)
//         break;
// }


// do-while loop

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while(i <10);


// const course = {
//     name: "JavaScript",
//     durstion: 3,
//     sections: 7
// };
 
// // console.log(course.name);
// // console.log(course["duration"]);
// // console.log(course.sections);



// for (const key in course)
//     console.log(course[key]);





//for - of loop 

// let numbers = [1,2,3,4,5];
// for (let element of numbers){
//     console.log(element);
// }



//continue

// const arr =[1,2,3,4,5];
// for (let element of arr){
//     if (element % 2 ===0){
//         continue;
//     }
//     console.log(element);
// }


// input two numbers and print the greater number

// var firstNumber = 10;
// var secondNumber = 11;
// if(firstNumber > secondNumber ){
//     console.log(firstNumber + " is greater than " + secondNumber)
// } else if ( secondNumber >firstNumber ){
//     console.log(secondNumber + " is greater than "+ firstNumber)
// } else {
//     console.log(firstNumber + "and" + secondNumber + "are equal")
// }


//or


// function maxNum(num1, num2){
//     return num1>=num2 ? num1 : num2;
// }
// console.log(maxNum(9,1));









/* implement a function to accept a number. then return "FizzBuzz" if
divisible by 3 and 5 
Or return "Fizz" if only divisible by 3 
Or return "Buzz" if only divisible by 5
Or return the original number if not divisible by 3 or 5 */



// let number = 5;
// if (number % 3 ===0 && number % 5 ===0){
//     console.log("FizzBuzz")
// } else if (number % 3 ===0 ){
//     console.log("Fizz")
// }else if ( number % 5 ===0){
//     console.log("Buzz")
// }else{
//     console.log(number)
// }


//or 


// function FizzBuzz(number){
//     if (number % 3 ===0 && number % 5 ===0)
//         return "FizzBuzz";
//     else if (number % 3 ===0 )
//         return "Fizz";
//     else if ( number % 5 ===0)
//         return "Buzz";
//     else
//         return number;
// }

// console.log(FizzBuzz(15))


/* impletent two functions for the first function, have it accept an 
array as a parameter which contains a list of numbers. then console log 
the even numbers in the array 

for the second function, have it accept an array and log the odd numbers*/



// function evenNumber(numbers){
//     for (let idx = 0; idx < numbers.length; idx++ ){
//         if (numbers[idx] % 2 ===0)
//             console.log(numbers[idx]);
//     }
// }
// evenNumber([1,2,3,4,5,7,8,9,10,100]);

// function oddNumber(numbers){
//     for (let idx = 0; idx < numbers.length; idx++ ){
//         if (numbers[idx] % 2 != 0)
//             console.log(numbers[idx]);
//     }
// }
// oddNumber([1,2,3,4,5,7,8,9,10,100]);


//or 



// function displayEvenNumbers(array){
//     for (const number of array) {
//         if (number % 2 ===0)
//             console.log(number);
//     }
// }
// displayEvenNumbers([1,2,3,4,5,6,7,8,9,10]);

// function displayOddNumbers(array){
//     for (const number of array) {
//         if (number % 2 !=0)
//             console.log(number);
//     }
// }
// displayOddNumbers([1,2,3,4,5,6,7,8,9,10]);



// const dog = {                        //object
//     name : "Max",
//     breed: "Dachshund",
//     age: 5,
//     weight: 10,
//     eat(){
//         console.log("Chomp!");
//     },
//     bark(){                         // method: Object inside method
//         console.log("Wolf!");
//     } 
// }


// function getDog(name, breed, age, Weight) { // factory function
//     return{
//         name : "brand",
//         breed: "Japanase",
//         age: 12,
//         weight: 13,
//     eat(){
//         console.log("Chomp!");
//     },
//     bark(){                         // method: Object inside method
//         console.log("Wolf!");
//        } 
//     }
// }

// const anotherDog = getDog('Marley', 'Choclate Lab' , 3 , 60 );
// console.log(anotherDog);





// function Dog(name, breed, age, weight){  // constructor Function (this)
//     //this = {};

//     //Add prpperties to this
//     this.name=name;
//     this.breed= breed;
//     this.age=age;
//     this.weight=weight;

//     this.eat = function(){
//         console.log(this.name + ": Chomp!");
//     }
//     this.bark = function(){
//         console.log(this.name + ': Woof!');    
//     }
// // return this

// }

// const anotherDog = new Dog("Marley", "Lab", 3 , 60);
// console.log(anotherDog);



// const person ={
//     name: "Steven"
// };
// console.log(person);

// person.favoriteFood = "tacos";
// console.log(person);

// person['favouriteIceCream'] = "chocolate";
// console.log(person);

// delete person.favouriteIceCream;
// console.log(person);

// person.eat = function(){
//     console.log('start eating');
// }

// person.eat();



// const person = {
//     name: "Steven"
// };

// console.log(person.constructor);

// // let newObj = {};             // same code as = new Object();
// // let newObj = new Object();   // same as ={};

// new String(); // "Steven"
// new Boolean();// true,false
// new Number(); // 1,2,3,4,5



/** the constructor property is a property that exists for all
 * objects in Java script that can be accessed it with either the 
 * dot notation or bracket notation and it refrences the 
 * constructor functioin used to inisiate and create that 
 * object
  */


// function add(num1 , num2){
//     return num1 + num2;
// }

// const n = add;

// console.log(n(2,2));

// console.log(add.length);



// let a = {10};
// let b = a;

// a= 100;

// console.log(a);
// console.log(b);


// different output


// let a = {value: 20};
// let b = a;

// a.value= 100;

// console.log(a);
// console.log(b);






// let numbers = [1,2,3,4,5];
// for (const elements of numbers){
//   console.log(elements);
// }


const dog = {
  name: "Max",
  age: 5, 
  eyeColor: "Blue"
};
// for (const key in dog){
//   console.log(dog[key]);
// }

const keys = Object.keys(dog);
console.log(keys);

const values = Object.values(dog);
console.log(values);

const entries = Object.entries(dog);
// console.log(entries);


for (const value of Object.keys(dog)){
  console.log(key);
}





