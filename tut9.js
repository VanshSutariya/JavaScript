// For , While ,&Do while Loops.
for (let i=0; i<10 ; i++) {
    console.log(i);
}
console.log('...........................................');

    j = 0;
while(j<=10){
  console.log(j+1);
  j+=1;  //j=j+1
}
console.log('...........................................');

let k=0;
do {
    if(k===5){
        k+=1;
        continue;
    }
 console.log(k+1);
 
 k+=1;
}while(k<10);

console.log('...........................................');
// to print the elements of an array
let arr=[1,5,7,8,3,6,4];
for( let i=0;i<arr.length;i++){
   const element = arr[i];
   console.log(element);
}
console.log('...........................................');

arr.forEach(function(element){
   console.log(element);
});


let obj = {
    name: "vansh",
    age:   19,
    type: "programmer",
    os: "ubantu"
}

for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`);
}