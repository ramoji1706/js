//Number of Islands 

//Objective: Given a grid of '1's (land) and '0's (water), count the number of islands. 

//Output: 1   

let grid =[ 
    ["1","1","1","1","0"], 

    ["1","1","0","1","0"], 

    ["0","0","1","0","0"], 

    ["0","0","0","0","0"] ]

let output = 0
grid.forEach(element => {  
  let numberOfIslands1 = 0 
   let numberOfIslands2 = 0
  element.forEach(each => {
        if (each == "0" ) {
          numberOfIslands1+=1
        }
        if (each == "1" ) {
          numberOfIslands2+=1
        }
      });          
  if (numberOfIslands1 == 5) {
        output+=1
      }
  if (numberOfIslands2==5) {
        output+=1
      }

    });
console.log(output); 