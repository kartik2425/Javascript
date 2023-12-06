"use strict" //treat all js code as newer version

let data="abcd"
console.log(typeof data) //type of data will be String

let data1=null
console.log(typeof data1)//type of data1 will be object

let data2=true
console.log(typeof data2)//type of data will be boolean 

let data3='a'
console.log(typeof data3)//type of data will be string not charcter

let data4=123
console.log(typeof data4)//type of data will be number

let data5=Symbol('12345')
console.log(typeof data5)//type of data will be Symbol

function fun(){

}
console.log(typeof fun)//type of data will be function

const arr=[12,33,55,23]
console.log(typeof arr); //type of data will be object


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

console.log(+true) //its convert number 1

console.log("02">1)
console.log(null==0 , null>=0)  //these operation are not prefered

console.log(undefined == 0 , undefined >0 , undefined < 0 );

const id=Symbol('123')
const anotherid=Symbol('123')

console.log(id===anotherid)

const myfunction = function()
{
    console.log("Hello World")
}

console.log(typeof myfunction)

console.log(typeof anotherid)

