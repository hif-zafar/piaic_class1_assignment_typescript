// Additional Conditional Tests

// Tests for equality and inequality with strings
console.log("Is car equal to 'Subaru'? I predict False.");
console.log(car === 'Subaru');

// Tests using the lower case function
console.log("Is car in lowercase equal to 'subaru'? I predict True.");
console.log(car.toLowerCase() === 'subaru');

// Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to
const numberA: number = 42;
const numberB: number = 24;

console.log("Is numberA equal to numberB? I predict False.");
console.log(numberA === numberB);

console.log("Is numberA greater than numberB? I predict True.");
console.log(numberA > numberB);

console.log("Is numberA less than or equal to numberB? I predict False.");
console.log(numberA <= numberB);

// Tests using "and" and "or" operators
const sunnyDay: boolean = true;
const weekend: boolean = false;

console.log("Is it a sunny day AND the weekend? I predict False.");
console.log(sunnyDay && weekend);

console.log("Is it a sunny day OR the weekend? I predict True.");
console.log(sunnyDay || weekend);

// Test whether an item is in an array
const fruits: string[] = ['apple', 'orange', 'banana'];

console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));

// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
