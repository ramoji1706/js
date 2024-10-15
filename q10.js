//10.Write array of numbers that merges two sorted arrays into one sorted array using concat followed by sort. 

//const array1 = [1, 3, 5]; 

//const array2 = [2, 4, 6]; 

// Output: [1, 2, 3, 4, 5, 6] 

const array1 = [1, 3, 5]; 

const array2 = [2, 4, 6]; 

const result = array1.concat(array2).sort()

console.log(result);
