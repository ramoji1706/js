//6.let a=3; 

  //let array1 = [0,1,2,3,4,5,6,7,8,9]; 

 // output = [[0,1,2], [3,4,5], [6,7,8], [9]] 

  

  //let b =5; 

  //output = [[0,1,2, 3,4],[5, 6,7,8,9]] 

let array1 = [0,1,2,3,4,5,6,7,8,9];   

let a = 3
let b = 5
let newArrayA = []
let newArrayB = []

for (let i = 0; i < array1.length; i+=a) {
    newArrayA.push(array1.slice(i,i+a))
}
for (let i = 0; i < array1.length; i+=b) {
  newArrayB.push(array1.slice(i,i+b))
}
console.log(newArrayA);
console.log(newArrayB);
