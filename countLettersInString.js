//1.Count how many times a letter occurring in a string 

//input : sri veni pogula  

//Output : { s : 1, r : 1, i : 2, v : 1,e : 1, n : 1, p: 1, o:1, g:1, u:1, l:1, a:1 }

let array = "sri veni pogula"
let m = array.replaceAll(" ","").split('')

let dict = {}

for (let element of m) {
    if (dict[element]) {
        dict[element]++
    }
    else{
     dict[element] =1
    }  
    
}


console.log(dict);
