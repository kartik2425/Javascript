//shallow copy is copy of an object share the same resources with the refernces as those  source object can me made change  example below program

let arr=["noodles",{list:["eggs","water","air"]}]

const arrcopy=Array.from(arr);

console.log('shallow copy ');

console.log(arrcopy);

arrcopy[1].list=["water","air"]

console.log(arrcopy)


//Deep Copy is copy of an whose  properties with  do not share the same reference the resouce side cant be change it will same example below program 

const arr1=["noodles",{list:["eggs","water","air"]}] 

const arr1copy=JSON.parse(JSON.stringify(arr1));

console.log('deep copy ');
console.log(arr1);
console.log(arr1copy);

arr1copy[1].list=["rise","water"]

console.log()

let value=[0,1,2,3,4,5,6]

value.push(9)

value.push(8)

console.log(value);

value.unshift(10)
value.shift(7)
console.log(value);

value.pop()

console.log(value)

console.log(value.includes(7))
console.log(value.indexOf(9))

const myn1=value.slice(0,3)

console.log(myn1);
console.log(value);

let myn2=value.splice(0,4)

console.log(`splice ${myn2}`);
console.log(value);

