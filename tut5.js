 // TYPE  CONVERSION or COERSION  .................

 console.log('Welcome to tut5');

 let myVar = String(71);
 console.log(myVar,(typeof myVar));

 //let booleanVar = String(true);
 let booleanVar = true; 
 console.log(booleanVar,(typeof booleanVar));

 let date = String(new Date());
 console.log(date , (typeof date));

 let arr = String([1,2,3,4,5]);
 console.log(arr.length,(typeof arr));

 // convert number into string 
 let i = 71;
 console.log(i.toString());
 
let x = Number("7123");
x=Number("71o6");
console.log(x,(typeof x));

let a = Number('71.2569');
console.log(a.toFixed(2),(typeof a));

let j = parseFloat('71.2569');
console.log(j,(typeof j));

// TYPE Coersion
let mystr = Number("626");
let mynum = 78;
console.log( mystr + mynum );