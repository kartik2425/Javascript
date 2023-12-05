"use strict" //treat all js code as newer version

let value="33abc"

let number=Number(value)     //can't convert numberwith charcter to number  

console.log(typeof number)
console.log(number) //Nan

let value1=true

let number1=Number(value1)//it convert boolean to number 
console.log(number1)

let var2=""
let boolean1=Boolean(var2)

//String(number)  --> convert number to string
//1=>true, 0=>false 
//"" => false
//"abcd"=>true

