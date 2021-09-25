
// write a function which returns array. call the function and destructure array values 
//and print the value

let person = ["Nashra", "Sonia", "Aqsa", "Mahi", "faiza", "Naheed"];
const [a, b, c, d, ...f] = person;

function personName(a) {
console.log(person[1]);
console.log(person[3]);
console.log(person);

}
personName(a);

// /////////////////
// Make a car object with model, year, color. display all the values by destructuring
const carData = {
    carName : "corola",
    carModel: 2021,
    carColor: "Black"

}
//data destructuring:
let { carName, carModel, carColor} = carData;
console.log(`My car name is ${carName}.
 car Model is ${carModel}.`);
 /////////////////////////////////////////////////


 // use three variable name, greeting and display value using template literals
let introduction = "I'm";
let greeting = "Hello";
let frName = "Naheed";
console.log(`${greeting} ${introduction} ${frName}`);


////////////////////////////////////
// use array [1,2,3,4,5,6,7,8,9,10] 
//assign first three values in seperate variables
// and all remaining in one element as an array


let x, y, z, rest;
[x, y, z] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(x);
            //    expected output: 1

console.log(y);
           //    expected output: 2

console.log(z);
           //    expected output: 3


[x, y, z, ...rest] =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(rest);
             //    expected output: Array [3,4,5 6, 7, 8, 9, 10]


////////////////////////
// if car speed is less than 80 display "car speed is slow", if greater than 80 but less than 120 than display 
// " car speed is moderate" and if greater than 120 display "car speed is fast"

var carSpeed = n;

if(n < 80){
    console.log("Car speed is Slow");
}

if(n > 80 && n < 120 ){
        console.log("Car speed is Moderate");
}
if(n > 120 ){
    console.log("Car speed is fast");
}
//*******************************************************

