// Arrays and objects in js

let marks = [65,87,46,35,98];
const fruits =[ 'Orange', 'Apple', 'Banana'];
const mix = ['Str', 99, [2,5,7] ];

const arr =  new Array(56,46,66, 'Apple');
console.log(arr);
console.log(mix);
console.log(fruits[2]);
console.log(arr.length);
console.log(Array.isArray(marks));

arr[0] = 92;
let arrelement = arr[0];
console.log('element:', arrelement);
console.log(arr);

let value = marks.indexOf(98);
console.log(value);

// mutating or modifying arrays
// marks.push(66);
// console.log(marks)

// marks.unshift(99);
//console.log(marks);
//marks.pop();
// marks.splice(1,2);
// console.log(marks)
//marks.reverse();
let marks2 = [1,2,3,4];
marks =marks.concat(marks2)
console.log(marks);

// In Object we can STORE  strings , arrays , nubers, booleans , int, float and all others
let myobj = {
        name: 'Vansh',
        channel: 'vs status',
        isactive: true,
        marks: [1,2,5,6]
};
 console.log(myobj);
 console.log(myobj.marks);
 console.log(myobj.name);