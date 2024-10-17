//8.work on  this task  

//for the given array Remove any negative numbers from the array, 

//Double each remaining number, 

//Check if every number is even after the transformation, 

//Return the sum of the transformed numbers if all are even, otherwise return null. 

  

let numbers = [12, -7, 5, 8, -10, 20]; 
//Expected Output: 90 

let sum = 0

numbers.forEach(element => {
    if (element>0) {
        sum += element+element
    }
    
});
console.log(sum);
