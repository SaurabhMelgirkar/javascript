let arr=[22,16,99,11,55,330]
// console.log(arr.sort());
// sortinmg only from first index
console.log(arr.sort((a,b)=>{
    // return a-b; 
    // asscending order
    return b-a
}));

// if a-b is positive then swap else do not swap
let arr2=[12,667,8,923,12,0]
;let sorted=arr2.sort((a,b)=>{
    return a-b
})
console.log(sorted);
console.log(arr2);
// sorted arr modify noriginal array arr2 

// foreach

let arr3=[12,667,8,923,12,0]
let newarr=arr3.forEach((val,a,b)=>{
    return a- b
    // console.log(val+100);
    
    
})
console.log(newarr);
// console.log(arr3);

// foreach will not return anything

let arr4=[12,667,8,923,12,0]
let newarr1=arr4.forEach((val)=>{
    // return val
    console.log(val+100);

})
console.log(newarr1);
// use of foreach loop is just for traversing no modification done no sorting done






