//6.Converts all string elements in an array to uppercase using a toUpperCase method. 

//const words = ['hello', 'world'];  

// Output: ['HELLO', 'WORLD'] 

const words = ['hello', 'world'];  

const result = []

words.forEach(element => {
    let upperCase = element.toLocaleUpperCase()

    result.push(upperCase)
});

console.log(result);
