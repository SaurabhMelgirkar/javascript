
let  firstfun=function(){  
    console.log("hi guyus welcome to nww journey"); 
}
firstfun()

let add=function(a,b){
    console.log(`addition is ${a+b}`);
}
add(10,20)
 function varname(a,b){
    console.log(`${a},${b}`);
 }
 varname(20,56)

// taking input from user 
/*
 function sub(){
     let  a=prompt("enter value of a")
     let  b=prompt("enter the value of b")
     a=parseInt(a)
     b=parseInt(b)  
    console.log(`substaraction of ${a} and ${b} is ${a-b}`);
}
sub()
*/

// arrow functions
let intro =( name,loc,age)=>{
    console.log(`my name is ${name} and  i am from ${loc} and my age is ${age} years.`);
    
}
intro("saurabh","pune","21")


let intro2=function(name,loc,age){
    console.log(`my name is ${name} and  i am from ${loc} and my age is ${age} years.`);

}
intro2("saurabh","nanded",21)

let intro3=function(){
    name="saurabh"
    loc="chatrapati sambhaji nagar"
    age=21
    console.log(`my name is ${name} and  i am from ${loc} and my age is ${age} years.`);

}
intro3()

let a=()=>{
    console.log("a");
    
}
a()
let order=(name,size,addon,price)=>{
    console.log(`hello mr ${name} you are orderd ${size} size pizaa with ${addon} and your total amount is ${price} rs`);
    

}
order("saurabh","large","sprite",550)


let Animal_sound=(animal_name,sound)=>{
    // let animal_name1=prompt("enter the name of animal")
    console.log(`${animal_name}: ${sound}`);
       
}
Animal_sound("cat" ,"mew -mew")

let mood=prompt("enter your mood")
let func=(mood)=>{
    
    
}