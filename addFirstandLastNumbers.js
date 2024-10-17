//4.Take One Array and do the process as if the number consists more than 3 digits To check the coditions as 

//=>First and last numbers  will be added . 

  //  Input: [287, 7342, 934757,66542,75,765765] 

  //  Output: [98,97,16811,8105,12,121212] 

let array =  [287, 7342, 934757,66542,75,765765] 

let newAraay = []

array.map((each,i)=>{
    let list = each.toString().split("")
     
     
    
     if (list.length==3){
        let firstLast = parseInt(list[0]) + parseInt(list[2])
       
        newAraay.push(parseInt(firstLast+list[1]))
    }
    else{
        let a = []
        for (let index = 0; index < list.length+1; index++) {
                
            let last = list.pop()
            let first =  list.shift()
             a.push(parseInt(first)+parseInt(last))
              
              
            if (list.length == 1) {
                a.push(list)
            }   
        }
        newAraay.push(parseInt(a.toString().split(",").join("")))   
    }
})
console.log((newAraay));
