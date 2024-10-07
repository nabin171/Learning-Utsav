// //1.splice method
// //modifies the original array if any fucntion like add,replace,remove is used.
// //Add numbers into an array using splice method
// let numbers = [1, 2, 3];
// numbers.splice(0, 0, 4, 5, 6);
// console.log(numbers);
// //Output:[4,5,6,1,2,3]

// //Remove numbers into an array using splice method i.e removing 4,5,6
// let numbers2 = [1, 2, 3, 4, 5, 6];
// numbers2.splice(3, 3);
// console.log(numbers2);
// //Output:[1,2,3]

// //Replace numbers into an array using splice method
// let numbers3=[1,2,4];
// numbers3.splice(1,1,6);
// console.log(numbers3)
// //Output:[1,6,4]

// //remove
// let numbers4 = [1, 2, 3, 4, 5];
// numbers4.splice(1, 4);
// console.log(numbers4);

// //add
// let numbers5 = [1, 2, 3, 4, 5, 6];
// numbers5.splice(1,0,7,8,9)
// console.log(numbers5);

// //replace
// let numbers6=[1,2,3,4,5,6]
// numbers6.splice(1,1,"ram");
// console.log(numbers6)













//2.Slice method
//returns new array without modifying the original array
// let word="Hello World";
// let newWord = word.splice(5,6);
// console.log(newWord);
//error arrise cause splice is not available for strings in JavaScript.so we use slice method


// let word1 = "Hello World";
// let newWord1 = word1.slice(0,5);
// console.log(newWord1);
// //output :Hello


// //remove two element from an array
// let numbers6=[1,2,3];
// let newnumbers6=numbers6.slice(1,1);
// console.log(newnumbers6);
// console.log(numbers6);

// let fruits = ["Apple", "Banana", "Orange", "Mango", "Peach"];
// let slicedFruits = fruits.slice(1,3); 
// console.log(slicedFruits); 
// console.log(fruits);  


// //basic example
// let array=[1,2,3,4,5];
// let newarray=array.slice(1,5);
// console.log(array);
// console.log(newarray);


// //2. Extract From a Specific Start Index
// let numbers = [10, 20, 30, 40, 50];
// let slicedNumbers = numbers.slice(2);  // Start at index 2 and extract till the end
// console.log(slicedNumbers);  // Output: [30, 40, 50]


// //3. Using Negative Indices
// let animals = ["Cat", "Dog", "Elephant", "Tiger", "Lion"];
// let slicedAnimals = animals.slice(-3);  // Start from 3rd last element to the end
// console.log(slicedAnimals);  // Output: ["Elephant", "Tiger", "Lion"]








//split
let sentence = "JavaScript is easy";
let words = sentence.split(" ");  // Split by space
console.log(words);  // Output: ["JavaScript", "is", "easy"]

let fruits = "Apple,Banana,Orange,Mango";
let fruitArray = fruits.split(",");  // Split by commas
console.log(fruitArray);  // Output: ["Apple", "Banana", "Orange", "Mango"]

let text = "Hello";
let characters = text.split("");  // Split by each character
console.log(characters);  // Output: ["H", "e", "l", "l", "o"]


let namee="nabin,shyam,ram";
let allName=namee.split(" ");
console.log(allName);


let namee1 = "nabin,shyam,ram";
let allName1 = namee.split(",");
console.log(allName1);

let namee2="nabin,shyam,ram"
let allName2=namee2.split("")
console.log(allName2);