//5.Create array of numbers that flattens a nested array (single-level deep) using a flat method. 

//const nestedArray = [1, [2, 3], [4, 5]]; 

// Output: [1, 2, 3, 4, 5] 

const nestedArray = [1, [2, 3], [4, 5]]; 

const result = nestedArray.flat(1)
console.log(result);
