//  temporal dead  zone -  timespam between var decleratiion and its inetilization
let outer=()=>{
    let a=10;
    let b=20;
let inner=()=>{
    console.log(a);
    
}
return inner;
}
// outer()() ------- curring 
let rf=outer()
// console.log(rf);
rf()

// finding process of variable  is lexical scoping (if var is not avaliabele in inner scope)
// closer is a memory block where js engine store the variable  if outer fun () is destroyed destroyed 
// (requried in inner function that are declared in outer functiin in closer)
