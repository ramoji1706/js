//9.Taking For loop for 1 to 50 We have to count the total number of 0's,1's,2's,3's,4's,5's,6's,7's,8's,9's 

let s0 = 0 
let s1 = 0
let s2 = 0
let s3 = 0
let s4 = 0
let s5 = 0
let s6 = 0
let s7 = 0
let s8 = 0
let s9 = 0

for (let index = 1; index < 50; index++) {
    
    index.toString().split('').map((element,i) =>{
             if(element == 0){s0+=1}
        else if(element == 1){s1+=1}
        else if(element == 2){s2+=2}
        else if(element == 3){s3+=3}
        else if(element == 4){s4+=4}
        else if(element == 5){s5+=5}
        else if(element == 6){s6+=6}
        else if(element == 7){s7+=7}
        else if(element == 8){s8+=8}
        else if(element == 9){s9+=9}
    })
    
}

console.log(s0,s1,s2,s3,s4,s5,s6,s7,s8,s9);
