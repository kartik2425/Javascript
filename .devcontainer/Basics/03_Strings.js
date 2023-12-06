const game=new String('abcdef')

console.log(game[0])

console.log(game.__proto__)

console.log(game.charAt(2))

console.log(game.indexOf('2'))

let value="   a c sgd  kjhdg"

console.log(value.trim())

const anotherString = value.slice(-1,4)
console.log(anotherString);

const url="htttps://hitesh.com//hitesh%20choudary"

console.log(url.replace('%20','-'))

//Check the given string is available are not in url 

console.log(url.includes('hitesh'));

console.log(Math.abs(-4));
console.log(Math.round(4.3),Math.round(-4.3));
console.log(Math.ceil(4.3),Math.ceil(-4.3));
console.log(Math.floor(4.3),Math.floor(-4.3));

let balance=new Number(400)

console.log(balance.toFixed(2));

 let myDate=new Date();
 console.log(myDate,' \ntype of date will be ',typeof myDate)

 let mycreateDate = new Date(2023,2,23)
 console.log(mycreateDate);

 console.log(mycreateDate.toDateString());
 let mydate1 = new Date("10-14-2023")
 console.log(Date.now())
 console.log(mydate1.getTime())
 console.log(Math.floor(Date.now()/1000))

 let newData= new Date()
 console.log(newData.getDate);
 console.log(newData.getDay());
 console.log(newData.getMonth());

 newData.toLocaleString('default',{
    weekday:
 })



