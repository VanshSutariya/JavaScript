// Function in js

const greet = function  (name , wishes ='HAPPY' ){
let msg = `Good Morning ${name}. ${wishes} `;
return msg;
}

let name = 'vansh';
let name2 = 'raj';

let val = greet (name,' Happy Birthday');
console.log(val);

const obj={
    name: 'vansh',
    game: function(){
        return "GTA";
    }
} 
 console.log(obj.game())

const arr = [1,2,3,4,5,6]
arr.forEach(function(element , index) {
    console.log(element , index)
} );


var i = 71;
console.log(i);
function user(name){
     i = 9;
    console.log(i)
    return `this is a ${name} user`;
}
console.log(user("vansh"), i);

let add = (a,b) => a+b;
console.log( add(2,9));


// let / const has block level scope
// var has function level scope
// Scope refers to the visibility of variables.
// In other words, which parts of your program can see or use it.
// Normally, every variable has a global scope. Once defined, every part of your program can access a variable. 
// It is very useful to be able to limit a variable's scope to a single function.