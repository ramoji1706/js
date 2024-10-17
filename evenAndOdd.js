//3.Take one array and add first all even numbers and second all odd numbers in a digit. 

//Input:[2435,982,5642,1232,87] 

//Output:[68,109,125,44,87] 

let array = [2435,982,5642,1232,87]

let output = []

array.map( (data,i)=> {
  let even = 0
  let odd = 0

  data.toString().split("").map((each,i) => {
        each%2==0? even+= parseInt(each):odd+=parseInt(each)

  })

  let a = even ==0?"":even.toString()
  let b = odd ==0?"":odd.toString()
  let c = a+b  
  output.push(parseInt(c))
})

console.log(output);
