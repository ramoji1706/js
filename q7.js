//7.Write array of numbers that finds the first negative number in an array using a find method. 

//const numbers = [3, 5, -2, 4, -1]; 

// Output: -2 

const numbers = [3, 5, -2, 4, -1]; 

const firstNegitiveNumber = numbers.find(num=>num<0)

console.log(firstNegitiveNumber);
