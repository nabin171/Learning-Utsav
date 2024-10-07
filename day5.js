//map
//Create a new array with the results of calling a provided function on every element in the original array.
//Return value: Returns a new array containing the transformed elements
//Usage: When you want to transform each element of an array and create a new array with the transformed values.

//1.Incresing the numbers
const days = [1, 2, 3, 4, 5];
const doubleDays = days.map(day => `#LUD${day * 2}: Double the learning on this day of #LearningUtsav!`);
console.log(doubleDays);
// Output: [
//  "#LUD2: Double the learning on this day of #LearningUtsav!",
//  "#LUD4: Double the learning on this day of #LearningUtsav!",
//  "#LUD6: Double the learning on this day of #LearningUtsav!",
//  "#LUD8: Double the learning on this day of #LearningUtsav!",
//  "#LUD10: Double the learning on this day of #LearningUtsav!"
// ]

//2.Converting Array of Strings to Uppercase
const topics = ['JavaScript', 'React', 'Node.js', 'MongoDB'];
const uppercaseTopics = topics.map(topic => `#LearningUtsav: LEARN ${topic.toUpperCase()} TODAY!`);
console.log(uppercaseTopics);
// Output: [
//   "#LearningUtsav: LEARN JAVASCRIPT TODAY!",
//   "#LearningUtsav: LEARN REACT TODAY!",
//   "#LearningUtsav: LEARN NODE.JS TODAY!",
//   "#LearningUtsav: LEARN MONGODB TODAY!"
// ]

//3. Extracting Property Values from an Array of Objects
const learningTasks = [
  { day: 1, task: 'Learn JavaScript' },
  { day: 2, task: 'Practice DOM Manipulation' },
  { day: 3, task: 'Understand Event Handling' }
];
const tasks = learningTasks.map((task) => `#LUD${task.day}: ${task.task}`);
console.log(tasks);
// Output: [
//   "#LUD1: Learn JavaScript",
//   "#LUD2: Practice DOM Manipulation",
//   "#LUD3: Understand Event Handling"
// ]

//Filter
//The filter method is used to create a new array with all elements that pass a test provided by a function.
 //It doesn't modify the original array, but instead, it returns a new array containing only the elements that satisfy the condition or predicate.

//syntax:const newArray = array.filter(callback(element, index, array), thisArg);

//1. Filtering Even Days of Learning (Even Numbers)
//Let's filter out the even days from an array of days, representing days in #LearningUtsav where you focused on lighter tasks.

const dayss = [1, 2, 3, 4, 5];
const evenDays = dayss.filter(days => days % 2 === 0);
console.log(evenDays);
// Output: [2, 4]

//2. Filtering Learning Topics That Contain a Specific Keyword
const topicss = ['JavaScript', 'React', 'Node.js', 'MongoDB'];
const reactTopics = topicss.filter(topic => topic.includes('React'));
console.log(reactTopics);
// Output: ['React']

//3.Filtering Learning Tasks Based on Day
const learningTaskss = [
  { day: 1, task: 'Learn JavaScript' },
  { day: 2, task: 'Practice DOM Manipulation' },
  { day: 3, task: 'Understand Event Handling' }
];
const laterTasks = learningTaskss.filter(task => task.day > 1);
console.log(laterTasks);
// Output: [
//   { day: 2, task: 'Practice DOM Manipulation' },
//   { day: 3, task: 'Understand Event Handling' }
// ]


//4. Filtering an Array of Numbers Based on a Condition
const numbers = [1, 2, 3, 4, 5];
const greaterThanThree = numbers.filter(num => num >= 3);
console.log(greaterThanThree);
// Output: [3, 4, 5]




//Reduce
//The reduce function in JavaScript is a powerful method used to accumulate or aggregate array values into a single result. 
//It's often used for operations like summing up numbers, concatenating strings, flattening arrays, or even constructing more complex objects.
//syntax:array.reduce(callback(accumulator, currentValue, index, array), initialValue);

//1.Summing Learning Days (Sum of Numbers)

const days1 = [1, 2, 3, 4, 5];
const totalDays = days1.reduce((total, day) => total + day, 0);

console.log(totalDays);
// Output: 15


//2.2. Concatenating Learning Topics (Array of Strings)

const topics1 = ['JavaScript', 'React', 'Node.js', 'MongoDB'];
const allTopics = topics1.reduce((acc, topic) => acc + ', ' + topic);

console.log(`#LearningUtsav: Topics covered - ${allTopics}`);
// Output: "#LearningUtsav: Topics covered - JavaScript, React, Node.js, MongoDB"



//3. Finding the Maximum Day (Finding Maximum Value)
const days2 = [1, 3, 7, 2, 5];
const maxDay = days2.reduce((max, day) => (day > max ? day : max), 0);

console.log(maxDay);
// Output: 7


//4. Counting Tasks with the Word "Learn" (Counting Occurrences)
const learningTasks2 = [
  { day: 1, task: 'Learn JavaScript' },
  { day: 2, task: 'Practice DOM Manipulation' },
  { day: 3, task: 'Learn Event Handling' }
];

const learnCount = learningTasks2.reduce((count, task) => {
  return task.task.includes('Learn') ? count + 1 : count;
}, 0);

console.log(`Number of tasks with 'Learn': ${learnCount}`);
// Output: "Number of tasks with 'Learn': 2"


//5.Flattening an Array of Arrays (Flattening Nested Arrays)

const learningDays = [
  ['JavaScript', 'React'],
  ['Node.js', 'MongoDB'],
  ['Express', 'Redux']
];

const flattenedTopics = learningDays.reduce((acc, subArray) => acc.concat(subArray), []);

console.log(flattenedTopics);
// Output: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express', 'Redux']
