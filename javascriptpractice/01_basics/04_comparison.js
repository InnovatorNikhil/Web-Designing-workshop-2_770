console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);


console.log("2">1); //automatically 2 converted in string
console.log("02">1);

//can be confuse try to avoid 
console.log(null > 0);
console.log(null == 0);  //NaN
console.log(null >= 0); //converted in 0

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);


// ===    compare data type and value both 
console.log("2"==2);