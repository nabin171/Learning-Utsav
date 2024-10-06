// Example: const cannot be reassigned or redeclared
const myBirthYear = 2000;
// myBirthYear = 2001; // Error: Assignment to constant variable

// Example: const with objects
const person = { name: "Ram", age: 25 };
person.age = 26; // Allowed: modifying object properties is allowed
console.log(person); // Output: { name: "Ram", age: 26 }

// Trying to reassign the entire object will cause an error
// person = { name: "Shyam", age: 30 }; // Error: Assignment to constant variable

// Example: const with arrays
const myHobbies = ["Reading", "Writing"];
myHobbies.push("Cycling"); // Allowed: modifying array contents
console.log(myHobbies); // Output: ["Reading", "Writing", "Cycling"]

// Trying to reassign the entire array will cause an error
// myHobbies = ["Swimming"]; // Error: Assignment to constant variable

// Example: const in block scope
if (true) {
  const myLanguage = "JavaScript";
  console.log(myLanguage); // Output: "JavaScript"
}
// console.log(myLanguage); // Error: myLanguage is not defined (const is block-scoped)

// Example: const in loops (block scope)
for (const j = 0; j < 3; j++) {
  console.log(j); // Error: Assignment to constant variable (const can't change)
}

// However, you can use const inside each iteration, because it's block-scoped
for (let i = 0; i < 3; i++) {
  const message = "Iteration " + i;
  console.log(message); // Output: Iteration 0, Iteration 1, Iteration 2
}
