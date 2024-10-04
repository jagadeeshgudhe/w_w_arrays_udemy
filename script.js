// === 1. Simple Array Methods ===
const fruits = ['apple', 'banana', 'cherry'];

fruits.push('date');
fruits.pop();
fruits.shift();
fruits.unshift('apricot');

// === 2. The New `at` Method ===
const colors = ['red', 'green', 'blue', 'yellow'];

console.log(colors.at(1));
console.log(colors.at(-1));
console.log(colors.at(-2));

// === 3. Looping Arrays: `forEach` ===
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

// === 4. `forEach` With Maps and Sets ===
// Using forEach with Map
const capitals = new Map();
capitals.set('Ap', 'amaravathi');
capitals.set('india', 'delhi');
capitals.set('Karnataka', 'Banglore');

capitals.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Using forEach with Set
const uniqueNumbers = new Set([1, 2, 3, 2, 1]);

uniqueNumbers.forEach((value) => {
  console.log(value);
});

// === 5. Creating DOM Elements ===
const container = document.querySelector('.container');

// Create a new div element
const newDiv = document.createElement('div');
newDiv.classList.add('message');
newDiv.textContent = 'Hello, this is a new message!';

// Insert the new div into the container
container.appendChild(newDiv);

// === 6. Data Transformations: `map`, `filter`, `reduce` ===
const dataNumbers = [1, 2, 3, 4, 5];

// map: Square each number
const squares = dataNumbers.map(num => num * num);

// filter: Get even numbers
const evens = dataNumbers.filter(num => num % 2 === 0);

// reduce: Sum of numbers
const sum = dataNumbers.reduce((acc, num) => acc + num, 0);

// === 7. The `map` Method ===
const users = [
  { firstName: 'Jagadeesh', lastName: 'Gudhe' },
  { firstName: 'Mahendra', lastName: 'babu' },
  { firstName: 'prakash', lastName: 'Om' },
];

// Create an array of full names
const fullNames = users.map(user => `${user.firstName} ${user.lastName}`);

// === 8. The `filter` Method ===
const transactions = [200, -100, 340, -300, 50, 400, -200, 1000];

// Get all deposits (positive numbers)
const deposits = transactions.filter(mov => mov > 0);

// Get all withdrawals (negative numbers)
const withdrawals = transactions.filter(mov => mov < 0);

// === 9. The `reduce` Method ===
const orders = [250, 400, 100, 350, 500];

// Calculate the total revenue
const totalRevenue = orders.reduce((total, order) => total + order, 0);

// === 10. Sorting Arrays ===
const fruitsSort = ['banana', 'apple', 'cherry', 'date'];
fruitsSort.sort();

const numbersSort = [100, 20, 5, 300];
numbersSort.sort();

// Correct numerical sort
numbersSort.sort((a, b) => a - b);

// === 11. More Ways of Creating and Filling Arrays ===
// Create an array of length 5 filled with zeros
const zeros = Array(5).fill(0);

// Create an array from another array-like structure
const arrayFrom = Array.from('hello');

// Create an array with a mapping function
const squaresArray = Array.from({ length: 5 }, (_, i) => i * i);

// Using Array.of()
const numbersOf = Array.of(1, 2, 3);
