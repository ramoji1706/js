//12.Write array of numbers that separates even and odd numbers from an array into two different arrays using a for loop and if-else conditions. 

//const numbers = [1, 2, 3, 4, 5, 6]; 

// Output:[2, 4, 6][1, 3, 5] 

const numbers = [1, 2, 3, 4, 5, 6]; 

let even = []
let odd = []

numbers.forEach(element => {
    if (element%2==0) {
            even.push(element)
    } else {
        odd.push(element)
    }
});

console.log(even,odd);
