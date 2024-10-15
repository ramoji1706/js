//10.Taking One Array And follow the rules 

//=>if it is one digits we can add 0 

//=>if it is consists 2 digits we can swap 

//=>if it is 3 or more digits we can swap upto the digits and the last digit may constant. 

  
//Input:-[8,59,738,9645,87657,123456789] 

//Output:-[80, 95, 378, 4695, 56787, 876543219] 

let array = [8,59,738,9645,87657,123456789]

let result = []

array.forEach(element => {
        let newElement = element.toString()
        if (newElement.length==1) {
            newElement+="0"
        }
        else if (newElement.length ==2) {
            let arr = newElement.split("")
            let rev = arr.reverse()
            let newreversestring = rev.join("")
            newElement = newreversestring
        }
        else{
            let lastChar = newElement.slice(-1)
            let revChar = newElement.slice(0,-1).split("").reverse().join("")
            let result = revChar+lastChar
            newElement = result

        }
       
        result.push(parseInt(newElement))
});

console.log(result);


