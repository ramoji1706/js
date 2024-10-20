//Loops: 

//1.FizzBuzz Problem: 

//Write a for loop that prints numbers from 1 to 100. But for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". 

//For numbers that are multiples of both 3 and 5, print "FizzBuzz". 

for (let index = 1; index<=100; index++) {
    if (index %3 ==0 && index %5 ==0){
        console.log("FizzBuzz");
    }
    else if (index %3 ==0) {
        console.log("Fizz");
    }
    else if (index%5==0) {
        console.log("Buzz");
        
    }
    else {
      console.log(index);
    }
    
}

//2.Factorial: 

//Write a for loop to find the factorial of a number n. For example, if n = 5, the result should be 5 * 4 * 3 * 2 * 1 = 120. 

let n = 5
let factorial = 1
for (let index = 1; index <= n; index++){
    factorial = (factorial*index)
 
}
console.log(factorial);

//3.Sum of Multiples: 

//Write a for loop that calculates the sum of all multiples of 3 or 5 below 1000. 

let sum = 0

for (let index = 1; index < 1000; index++) {
        if (index % 3 == 0 || index % 5 ==0) {
            sum+=index
        }
    
}
console.log(sum);

//4.Count Vowels in a String: 

//Write a loop to count the number of vowels (a, e, i, o, u) in a given string. 

//Break and Continue: 

let string = "applei"
let newString = string.split("")
let count = 0

newString.forEach(element => {
    if ("aeiou".includes(element)) {
        count+=1
    }
});

console.log(count);

//5.Write a loop that prints numbers from 1 to 10 but skips the number 5 using the continue statement. Stop the loop entirely when the number reaches 8 using 

//the break statement. 

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        continue
        
    } 
    else if(index == 8){
        break
    }
    else {
        console.log(index);
        
    }
    
}