// If-else condition & Switchcase in js
const age = 24;
const doesdrive = true;
const license = false;
//const vari = 69;
if (age ==25){
    console.log('age is 25');
}
// if the datatype of age is same then only the next condition will true
if(age !== 25){
    console.log('age is ! not 25');
}
else{
    console.log('age is not 25');
}

if(typeof vari !== 'undefined'){
    console.log('vari is defined');
}
else{
    console.log('vari is not defined');
}
 //
 
if(doesdrive && age>18 && license){
    console.log('You can drive');
}
else{
    console.log('you cannot drive');
}

// ternary operator
console.log(age==25? 'Age is 25' : 'Age is not 25')

// Switchcase
switch (age) {
    case 18:
        console.log("age is 18");
    break;

    case 20:
            console.log("age is 24");
     break;
            
    case 24:
        console.log("age is 24");
     break;

    default:
            console.log('invalid');
  break; 
    
}