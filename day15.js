// let Object={
    // "user name":"Tinku",
    // age:21,
    // add:"pune"
// 
// 
// }
// 
// console.log(Object.add);
// console.log(Object."user name");
// 
// 

// 
// class createobj{
    // constructor(name){
        // this.name=name
    // }
// }
// let obj1=new createobj('ti8nku')
// console.log(obj1);


// let createobj=(name)=>{
    // let a=10
    // let obj={
        // username:name
    //  }
    // console.log(name);
    // let username=name
    // console.log(username);
    
    
    
    // return obj
// }
// let stud1=createobj("Tinku")
// console.log(stud1);


// let createobj =(name,qual,yop ,email)=>
// {
    // let obj={
        // name,
        // qual,
        // yop:yop,
        // email:email,
// 
    // }
    // return obj
// }
// let stud1=createobj("roham","bcs",2027,"rohan12@gmail.com");
// let stud2=createobj("saurabh","bcs","pata nahi","saurabh12@gmail.com");
// 
// console.log((stud1));
// console.log(stud2);
// console.log("name" in stud1);
// 
// 

// let obj={
    // name:"tinku",
    //  hobbies :["chess","cricket","swimming"],
    // add:{
        // pincode:"431605",
        // city:"nanded"
// 
    // }
// 
// }
// obj.hobbies.forEach( e=> console.log(e)
// )
// console.log(obj.add.pincode);
// 

let obj={
    
    nane:"saurabh",
    age:21,
    
    
}
let arr=Object.entries(obj);
console.log(arr);
let newarr=Object.fromEntries(arr);
console.log(newarr);

let arr1=[["num1",10],["num2",20],["num3",30],[ true,3]]
console.log(Object.fromEntries(arr1));
   let add={
        pincode:"431605",
        city:"nanded"

    }
    let parent_info={
        p_nane:"sujata",
        P_mob:8999343208,
    }
Object.assign(obj,add,parent_info)
console.log(obj);



// console.log(Object.fromEntries(obj));

