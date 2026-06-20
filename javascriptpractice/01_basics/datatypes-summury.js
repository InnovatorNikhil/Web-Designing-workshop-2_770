//#primitive

//7  types: string,number,boolean,null,undefined,Symbol,bigInt

const score= 100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null  //data type of null is object
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
conole.log(id==anotherId);


const bigNumber=23455363649335n



//refracne or (non primitive)

//Array ,objects,functions  all have data type function 

const heros=["shaktiman","naagraj","doga"]

let myObj={
    name:"Nikhil",
    age:19
}

const myFunction=function(){
    console.log("helloworld")



}

console.log(typeof(bigNumber));
console.log(typeof(outsideTemp));
console.log(typeof(myFunction)); //function return type is object Function
