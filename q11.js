//11.Write array  that counts the total number of vowels in an array of strings using for loop,if-else condition and the split method. 

//const words = ["apple", "banana", "cherry"]; 

// Output: 6

const words = ["apple", "banana", "cherry"]; 
let vowels = 0

words.forEach(element => {
    let newEl = element.split("")

    newEl.forEach(element => {
        if (element =="a" || element =="e" ||element =="i" || element =="o" || element =="u") {
            vowels+=1
        }
    });
    
});
console.log(vowels);
