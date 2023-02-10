// let person = {
//     name: 'Sarah',
//     age: 27

// };

// //dot notation
// person.name = 'john'

// //bracket notation
// person['name'] = 'Mary';

// console.log(person);

// making a function
// function greet(name, lastName) {
//     console.log('Hello ' + name + ' ' + lastName);
// }

// greet('john', 'smith')


// //Calculate a value
// function square(number) {
//     return number * number;
// }

// //this will call to another function
// console.log(square(2));

//Operators
//assignment operators
// let x = 10;
// x = x+5; 
// //or 
// x += 5;

// x *= 3; // instead of x = x * 3

// console.log(x);


// boolean
// let x = 1;

// console.log(x > 0);
// console.log(x >= 1);
// console.log(x < 1);

// // equals to
// console.log(x ===1);
// console.log(x !== 1);

//Ternary or conditional operator


//logical and &&
//this will return ture if both operants are true

/*let userColour = 'red';
let defaultColour = 'blue';
let currentColour = userColour || defaultColour;

console.log(currentColour); */

// exercise

/*let a = 'red';
let b = 'blue';
let c = a;
a = b;
b = c;


console.log(a);
console.log(b); */

// function to take in 2 numbers and returns the max of the two
// let number = maxFunction(10,2);
// console.log(number);

// function maxFunction(input1, input2) {
         
//    return (input1>input2) ?  input1 : input2;
// }
// function isLandscape(width,height){
//     return(width>height) ? true : false;

// }
// let rectangle = isLandscape(2, 5);
// console.log(rectangle);
//the above is too explicit - I have defined true and false- 
//instead should inferr by using a logic statement
// function isLandscape(width,height){
//     return(width>height);
// }

// let rectangle = isLandscape(2, 5);
// console.log(rectangle);

// otherwise could have been completed with if
// function isLandscape(width,height){
//     if(width>height) return true;
//     return false;
// }

//if number divisible by 3 ==> fizz
//if divisible by 5 ==> buzz
//if both 3 and 5 ==> fizzbuzz
//neither 3 nor 5 ==> input
//input not a number ==> not a number
// const output = fizzBuzz(2);
// console.log(output);

// function fizzBuzz(input) { 
//     if(typeof input !== 'number')
//         return NaN;
    
//     if ((input % 3 ===0) && (input % 5 ===0)) 
//         return 'FizzBuzz';

//     if (input % 3 === 0) 
//         return 'Fizz'; 

//     if(input % 5 === 0) 
//         return 'Buzz';

//     return input;
// }

//pay attention to order of if statements
// had both 3 and 5 been last...it would exit before that statement
//had been reached. Therefore 3 & 5 was moved


// Speed Limit = 70
// if driviing below speed limit = output is 'OK'
//if exactly speedlimit still ok
// for every 5 km over speed limit the driver will get 1 point
// pount: answer (on console)
//Math.floor() // returns the greatest integer
//12 points --> suspended

// checkSpeed(71)

// function checkSpeed(speed) {
//      //use constants rather than magic numbers
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if(speed< speedLimit + kmPerPoint) // needed to add kmperpoint to make this 75
//     console.log('ok');
//     else {
//         const points = Math.floor((speed - speedLimit) / kmPerPoint);
//         if (points >= 12)
//         console.log('Liscence suspended');
//         else
//             console.log('Points: ', points);
    
//     }

// }


// exercise 14 Even and Odd numbers
//display number input and whether its even or odd

// showNumbers(10);

// function showNumbers(limit){

//     for(let i=0; i <= limit; i++) {
//         if (i % 2 ===0) console.log(i, "even");
//         else console.log(i,'Odd');
            
//         // const message = (i % 2 === 0) ? 'Even' : 'Odd';
//         // console.log(i, message); //This is another way to do it
        
//     }   
    
// }  


//Exercise 15 Count Truthy
//Undefined, null, ' ' , false, NaN, 0
//return truthy values in the array

// const array = [0, null, undefined, 1, 3, NaN];
// console.log(countTruthy(array));

// function countTruthy(array){
//     let truthCount = 0;

//     for (let value of array)
//         if(value) //if this is valued as truthy 
//             truthCount++
//         return truthCount;
        
// }


// exercise 16 Show just the string type in our object
// const movie= {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie);

// function showProperties(obj){
//     for(let key in obj)
//     if (typeof obj[key] === 'string')  //to get the value of the key
//         console.log(key, obj[key]);
// }

//return all the multiples of 3 and 5 from 0 to the limit input
// console.log(sum(10));

// function sum(limit){
//     let sumOutput = 0 //declare output to store calculation in

//     for(let i = 0; i <= limit; i++) //loop through the 10
//         if(i % 3 === 0 || i % 5 === 0) // multiples of 3 and 5
//         sumOutput += i; //This will add them together

//     return sumOutput; //output on console
// }


// const marks = [80, 80, 50];

// console.log(calculateGrade(marks));

// function calculateGrade(marks){

// }



//Create a factory function - use camel case
// function createCircle(radius){ //dont want to hard code dimensions so put parameter between parentheses 
//     return {
//         radius, //if key and value are the same just state it once
//         draw (){
//             console.log('draw');
//         }
       

//     }

// }

// const circle1 = createCircle(1); //call with different values
// console.log(circle1);

// const circle2 = createCircle(2) //can create another circle using same template 


//Constructor function - use pascal casing
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     } 
// }
// const circle = new Circle(1); //new creates an empty object


// const circle = {
//     radius: 1
// };

// circle.colour = 'yellow';
// circle.draw = funciton() {}

// delete circle.colour;
// delete circle.draw;

// console.log(circle);

// function used to create an object = constructer 
// in javascript objects are functions
//can iterate through object using a for in loop


//methods in arrays- push will add elements to the end of an array
// const numbers = [3,4];

// numbers.push(5,6);
// console.log(numbers);

// numbers.unshift(1, 2);

// numbers.splice()

//Exercise 1: objects
//street , city, zip
// const address = {
//     street: "Donegall rd",
//     city: "Belfast",
//     Zip: "BT12 5BN"
// };

// function showAddress(address) {
//     for (key in address)
//         console.log(key, address[key]);
// }

// showAddress(address);

//Use a factory function then a constructor function

// function createAddress(street, city, zipcode){
//     return {
//         street: street,
//         city: city,
//         zip: zipcode, 
//     }
   
// }
// const address = createAddress('donegall', 'belfast', 'BT16 5NB');
// console.log(address); // This is a factory function


// make a constructor function

// function Address(street, city, zipcode){ 
//     this.street = street;
//     this.city = city;
//     this.zipcode = zipcode;
// }

// const address2 = new Address('Lanyon', 'london', 'SE 4W');
// console.log(address2); // This is a constructor function


// THis is a test for git !!!