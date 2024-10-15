//13.Write array of numbers that finds the common elements between two arrays using a for loop,if-else condition and includes method. 

//const array1 = [1, 2, 3, 4]; 

//const array2 = [3, 4, 5, 6]; 

// Output: [3, 4] 

const array1 = [1, 2, 3, 4]; 

const array2 = [3, 4, 5, 6]; 

const commonElements = []

array1.forEach(element => {
    
    if (array2.includes(element)) {
            commonElements.push(element)
    } else {
        
    }
});

console.log(commonElements);
