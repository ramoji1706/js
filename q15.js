//15.Write array of numbers that inserts an element at a specific index using a splice method. 

//const numbers = [1, 2, 4, 5]; 

//const element = 3; 

//const index = 2; 

// Output: [1, 2, 3, 4, 5] 

const numbers = [1, 2, 4, 5]; 

const element = 3; 

const index = 2; 

numbers.splice(2,0,3)//(index,count,element)
console.log(numbers);
