//console.log("hi guys");
// imidiate invoke function
// function without experssion & with expression 
// highert order functio (accept function as argument)
// call back function  (function which pass as argument)
let operation=(action,x,y)=>{
    console.log("operation function called");
    console.log(action(x,y));
    
    // action(10,20)
    
}
let sum=(a,b)=>{
    console.log("sum function called");
    console.log(a+b);
    
    
}
operation(sum,10,20)

//let operation1=(cbfunc,x,y)=>{
//    
//    // console.log(cbfunc,x,y);
//     cbfunc(x,y)
//    
//}
//let add=(a,b)=>{
//    console.log(a+b);
//}
//let sub=(a,b)=>{
//    console.log(a-b);
//}
//
//operation1(add,20,30)
//operation1(sub,30,10)
//
//let func=(cfun,a)=>{
//    //var a=23
    //var a=23
    //var a=23
    // console.log(a);
    // console.log(a);
    // console.log(a);
//    cfun(a)   
//    cfun(a)   
//    cfun(a)   
//}
//}
//}
//let x=(a)=>{
//let x=(a)=>{
//let x=(a)=>{
//    console.log(a);
//    console.log(a);
//    console.log(a);
//    
//    
//    
//}
//}
//}
//func(x,122)
//func(x,122)
//func(x,122)
//
//
//