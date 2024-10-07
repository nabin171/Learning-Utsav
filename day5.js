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

const tasks = learningTasks.map(tasks=>`${tasks.task}` );

console.log(tasks);
// Output: [
//   "#LUD1: Learn JavaScript",
//   "#LUD2: Practice DOM Manipulation",
//   "#LUD3: Understand Event Handling"
// ]
