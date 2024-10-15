//Arrays: 

//1.Find Maximum in an Array: 

//2.Reverse an Array: 

//Write a function using a loop that takes an array and returns the array in reverse order. 

//3.Find the Index of an Element: 

//Write a for loop to find the index of a specific value in an array, e.g., find the index of 'green' in let colors = ['red', 'blue', 'green', 'yellow']. 

//4.Remove Duplicates:+ 

//Write a function using a for loop to remove duplicate values from an array let arr = [1, 2, 3, 2, 4, 1, 5]. 
const array = [5,8,15,20]
let newA = []
let max_in_array = Math.max(...array)
console.log(max_in_array);

function rev(arr) {
    for (let i = arr.length-1; i >=0 ; i--) {
        newA.push(arr[i])
        
    }
}

rev(array)
console.log(newA)

let colors = ['red', 'blue', 'green', 'yellow']
let colr ="green"

for (let index = 0; index < array.length; index++) {
    if (colors[index] == colr) {
        console.log(index);
    }
    
}

let arr = [1, 2, 3, 2, 4, 1, 5]

let NewArr = []

function func(arr) {
        for (let index = 0; index < arr.length; index++) {
            if (!NewArr.includes(arr[index])) {
                NewArr.push(arr[index])
        
            }        
        }

        return NewArr

        
}
console.log(func(arr))
 
