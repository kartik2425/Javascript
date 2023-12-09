const addTwo=(num1,num2)=> {

    return num1+num2
}
  
console.log(addTwo(3,4));

const addOne= (num1,num2)=>num1+num2

console.log(addOne(3,4));

//IIFE Imediate invoked function expression

(function chai(){
     console.log('IIFE one')
})();

((name)=>{
    console.log('IIFE Two',name);
})('abcd') 



