const greetings="grettings";
let i=0;
for(const value of greetings)
{   
    console.log(i,' : ',value);
    i++;
}


const map = new Map();

map.set('IN','USA')
map.set('USA','America')
map.set('fr','france')

//console.log(map)

for(const [key,value] of map)
{
    console.log(key,' :- ',value);
}

const myobj={
    in:'india',
    usa:'america'
}
//we cant iterat object because for of access based on values so we cant get proper values in object  
// for(const value of myobj)//it will directly access to values not keys
// {
//     console.log(value);
// }
//we cant iterate value in map 
for(const value in map) // it will access based on keys not values so we cant get direct values withou key in map 
{
    console.log(value);
}

//for each loop 

const codings=["abc","def","ghi","jkl"]

//we can access function within foreach loop 
codings.forEach(value => {
    console.log(value);
});
console.log("*************************************");
//we can call function within foreach loop as parameter 
function printme(item)
{
    console.log(item);
}

codings.forEach(printme);
//we can access array in index wise all values 
codings.forEach((item,index,arr) => {
     console.log(item,index,arr);
});

//accessing data base values in array index format

const mycoding=[
{
    langname:"c",
    langfilename:"CPP"
},
{
    langname:"java",
    langfilename:"java"
},
{
    langname:"py",
    langfilename:"python"
}
];

mycoding.forEach((item)=>{
    console.log(item.langfilename);
})

