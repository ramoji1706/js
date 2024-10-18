//11.Taking One Array and follows the some rules 

//=>if the array has single digit consecutives one is even and one is odd then we can add those numbers other wise the first number will be same 

//=>if the array has two digits in that one is even and one is odd the we can add otherwise same number will return 

//=>if the array consists 3 or more digits the first and last digits have one is even and one is odd then we can add those numbers and remain number will append to it. 

//Input:-[2,7,9,6741,983,23,67,89,46,27,6,3,8,9,33,2435,982,56742,5,2,9,3,2,787876] 

//Output:-[9,7,9,774,983,5,13,17,46,9,9,11,17,9,33,743,118,7674,7,11,9,5,2,138787]

let array = [2,7,9,6741,983,23,67,89,46,27,6,3,8,9,33,2435,982,56742,5,2,9,3,2,787876] 

let newArray = []

let modifiedArray = array.toString().split(',')

for (let index = 0; index < modifiedArray.length; index++) {
    
    //For one digit consecutives one is even and one is odd then we can add those numbers other wise the first number will be same
    
     if (modifiedArray[index].length == 1 && modifiedArray[index+1].length >1) {
        newArray.push(parseInt(modifiedArray[index]))
    }

    else if (modifiedArray[index].length == 1 ) {
        if ((modifiedArray[index] % 2  == modifiedArray[index+1] %2)) {
            newArray.push(parseInt(modifiedArray[index]))
        }
        else{
            newArray.push(parseInt(modifiedArray[index])+ parseInt(modifiedArray[index+1]))    
        }
    }
    
    //For two digits in that one is even and one is odd the we can add otherwise same number will return
    if(modifiedArray[index].length == 2){
        if ((modifiedArray[index][0] % 2 == modifiedArray[index][1] % 2)) {
            newArray.push(parseInt(modifiedArray[index]))
        }
        else{
            newArray.push(parseInt(modifiedArray[index][0])+ parseInt(modifiedArray[index][1]))
        } 
    }
    
    //For 3 or more digits the first and last digits have one is even and one is odd then we can add those numbers and remain number will append to it. 
    if (modifiedArray[index].length >= 3) {
        if(modifiedArray[index][0] % 2 == modifiedArray[index][modifiedArray[index].length-1]%2){
            newArray.push(parseInt(modifiedArray[index]))
            
        }
        else{
            let add = parseInt(modifiedArray[index][0]) + parseInt(modifiedArray[index].slice(-1))
            let rem = modifiedArray[index].slice(1,-1)
            
           newArray.push(parseInt(add+rem));
        }
            
}
    
}
console.log(newArray);