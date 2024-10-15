let array = [44,566,12345,234,235,22,23,34,45876]
//expected output [8,125,69,28,4,23,43,1812]

let result = []

array.map((data,i) =>{
    let even = 0
    let odd = 0

    data.toString().split("").map((data1,i)=> {
        data1%2==0?even+=parseInt(data1):odd+=parseInt(data1)

    })
    let a = even==0?"":even.toString()
    let b = odd ==0?"":odd.toString()

    let c = a+b

    result.push(parseInt(c))

})
console.log(result);
