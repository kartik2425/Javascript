let mysym=Symbol("abcd")

const Jsuser ={

    name:"Hitesh",
    age:"20",
    [mysym]:"xyz",
    email:"reddy@google.com",
    loaction:"bng",
    lastdaylogin:["Monday","Tuesday"]

}

Object.freeze(Jsuser);

Jsuser.name="ramu"
console.log(Jsuser.email)
console.log(Jsuser.name)
console.log(Jsuser);

console.log(Jsuser[mysym]);

Jsuser.greetings=function(){
    console.log("Hello in js user");
}

//console.log(Jsuser.greetings());
  
/////////////////////////////////////////////////////////////////////////////////
const tinderuser={}
tinderuser.id="123",
tinderuser.name="ramu",
tinderuser.isloggedin=false

console.log(tinderuser);

//Object within object
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3={obj1,obj2}

console.log(obj3);
console.log(obj3.obj1);
//Object destructure 
const course={

    course :"ract js",
    fees:1000,
    name:"Ramuu"
}

const{name : instructor }=course;

console.log(instructor);