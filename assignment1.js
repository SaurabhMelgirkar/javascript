// checkdivisdibilitywithcallback = (num, cbf1) => {
//   cbf1(num)
// }
// cbf1 = num => {
//   if (num % 3 == 0) {
    // console.log(num + ' is divisable by 3')
//   } else {
    // console.log(num + 'not dividsable by 3')
//   }
// }
// checkdivisdibilitywithcallback(12, cbf1)




// 1. Function Basics with Callback:Create a function called greetWithCallback that
// accepts a callback function as an argument. Inside this 
// function, the callbackshould print “Hello World” to the 
// console. Test it by passing a callback that doesthis job.

// 
// greetwithcallback=(cbf)=>{
// cbf()
// }
// cbf=()=>{
    // console.log("hello world");
    // 
// }
// greetwithcallback(cbf)

// 2. Function with Parameters and Callback:Write a function named
// addTwoNumbersWithCallback that accepts two numbers and a 
// callback function. Inside addTwoNumbersWithCallback, call 
// the callback with the sumof the twonumbers as its 
// argument. The callback should log this sum to the console. 


// 
// addtwonumber=(n1,n2,cbf)=>{
    // cbf(n1,n2)
// 
// }
// cbf=(n1,n2)=>{
    // console.log(n1+n2);
    // 
// }
// addtwonumber(1,3,cbf)

// 3. Function with Conditional Statement and Callback:Create
//  a function calledcheckEvenOddWithCallback that accepts a 
//  number and a callback function. Useanif-else statement to
//   check if the number is even or odd. Then, call the
//    callbackfunction with a message 
// (“Even” or “Odd”) depending on the result.