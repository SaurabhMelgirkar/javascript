//console.log(a);
// var a=10; not in temporal red zone so no error

// hosting in javscript
// a ablity of javascrpt engine of accessing the variable on the top of the execution context

// temporal dead zone (let ,const)
// window object is a parent object location in head area
// var console document stored in wibndow object

// close - the abaity of javascript engine to acess the variable even outer functioin is destroyed
// let fl=
// j()=>{
// let b=20;
// let f2=()=>{
//     console.log(b);
// };
// f2()
// };
// f1()
// let v = f1()
// console.log(v)
// v()

let f5 = () => {
  let b = 20;
  let f6 = () => {
    console.log(b);
  };
  f6();
};
f5();
