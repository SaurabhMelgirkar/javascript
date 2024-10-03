// console.log("hi");
// in arrow function this keyword not work prooprly


// function CreateObj(name,add,contact){
    // this.name=name
    // this.add=add
    // this.contact=contact
// }
// let obj1=new CreateObj("tinku","pune",567890234)
// let obj2=new CreateObj("tinku","pune",567890234)
// console.log(obj2);
// console.log(obj1);


// calling function using call 
// 
// let Spiderman={
    // name:"spiderman",
    // gf:"merry",
    // aunt:"may",
    // uncle:"Ben"
// 
// }
// function Myfun( realname){
    // console.log(this.uncle);
    // console.log(this);
    //  console.log(realname); 
    // this.realname=realname
    // console.log(this);
    // 
// }
// Myfun.call(Spiderman,"peter parker")
// console.log(Spiderman);
// when we use rhis keyword in function it will be treated aqs conctructer function


// apply method
// 
// let Spiderman={
    // name:"spiderman",
    // gf:"merry",
    // aunt:"may",
    // uncle:"Ben"
// 
// }
// function Myfun( realname,loc){
    // console.log(this.uncle);
    // console.log(this);
    //  console.log(realname,loc);
    //  this.loc=loc 
    // this.realname=realname
    // console.log(this);
    // 
// }
// Myfun.apply(Spiderman,["peter parker","New York"])
// console.log(Spiderman);

// Bind method
// 
// let Spiderman={
    // name:"spiderman",
    // gf:"merry",
    // aunt:"may",
    // uncle:"Ben"
// 
// }
// function Myfun( realname,loc){
    // console.log(this.uncle);
    // console.log(this);
    //  console.log(realname,loc);
    //  this.loc=loc 
    // this.realname=realname
    // console.log(this);
    // 
// }
// let bindedfun=Myfun.bind(Spiderman,"peter parker", "new York")   
// in bind no function call refreence returm
// console.log(bindedfun());

// let obj={
    // name:"hi",
// }
// function Myfun(){
    // console.log(this);
    // 
// }
// Myfun.call(obj)
// 
// let obj2={
    // name:"hello",
// }
// function fun(add) {
    // console.log(this);
    // this.add=add
    // console.log(this);
    // 
// }
// fun.apply(obj2,["pune"])
// 
// let obj3={
    // class:"js",
// }
// function fun2(teacher){
    // console.log(this);
    // this.teacher=teacher
    // console.log(this);
    // 
    // 
// }
// let bindobj=fun2.bind(obj3,"prasad sir")
// console.log(bindobj());



let Spiderman={
    name:"spiderman",
    gf:"merry",
    aunt:"may",
    uncle:"Ben"

}
let villen=["dovctoroctopus","green goblin","Electro"]
function Myfun( vill1,vill2,vill3){
    console.log(vill1);
    console.log(vill2);
    console.log(vill3);
    
       }
Myfun.apply(Spiderman,villen)
// console.log(Spiderman);