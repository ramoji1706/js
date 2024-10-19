//5.Take One Array Consists of all digits like single digit numbers,double,triple and more in that you have follows some  rules:- 

  //=>if it is one digit even or odd number we can add 0 in absence place 

//=>if it is 2 or more digits we have to count all even and odd numbers. 

//Note:-In Output 1st Digit Represents Odd and 2nd Digit Represents Even. 

  // Input:[5,7,8,6,25,18,19,27,33,88,754,484,374,987,8765,7645,8994,6548,932157,48327,9875432] 

//  Output:[10,10,01,01,11,11,20,11,20,02,21,03,21,21,22,22,22,13,51,23,43] 

let array =[5,7,8,6,25,18,19,27,33,88,754,484,374,987,8765,7645,8994,6548,932157,48327,9875432] 

let newArray = []

array.map((each,i)=>{
    let even = 0
    let odd = 0
        each.toString().split('').map((item,i)=>{
            if (item % 2 == 0) {
                even += 1 
            } else {
                odd+=1
            }
        })
    newArray.push(parseInt(odd.toString()+even.toString()))
})
console.log(newArray);