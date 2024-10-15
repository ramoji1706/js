//14.Write array of numbers that finds the second largest number in an array using a for loop, if-else condition. 

//const numbers = [10, 5, 8, 20]; 

// Output: 10 

const numbers = [10, 5, 8, 20]; 
let largest = Math.max(...numbers)


let second_largest = 0
numbers.forEach((element,i) => {
    
    if (element!=largest && second_largest<element) {
        second_largest=(element)
        
    }

});

console.log(second_largest);
