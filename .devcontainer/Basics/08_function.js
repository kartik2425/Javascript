const mynums=[1,2,3,4,5,0,6,2.7,7,8];

const num=mynums.filter(num =>(num>4)); // return the values 

const num1=mynums.filter((num)=>{ // in this section we need to write return because we are within scope checking a condition 
    num>4  // within scope it cant return the value automaticaly 
})
console.log(num); // return the values 
console.log(num1);// 


// reduce() 

const myarr=[1,2,3,4,5,6];
const value=myarr.reduce((acc,curval)=>acc+curval,0)
console.log(value);

// cart values need sum of price fnd out 

const mycart=[
{
    proname:"tv",
    provalue:20000
},
{
    proname:"mobile",
    provalue:10000
},
{
    proname:"fridge",
    provalue:15000
}
]

const totalvalue = mycart.reduce((acc,curval)=>acc+curval.provalue,0)

console.log("tota vaue of this cart is : ",totalvalue);


const myarray=[2,4,15,20,30]

const total = myarray.map((num)=>num>10)

console.log(total);

const myarray2=[

    [0,2],
    [1,5],
    [4,9]
];

const result = myarray2.reduceRight((acc,curval)=>acc.concat(curval))

console.log(result);