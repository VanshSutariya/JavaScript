//map , filter , reduce 
// map : it is use when we have to deal with each element of an array
const arr = [2,6,9,8,4,7];
const arr2 =[2,6,9,8,5,8];
// const output = arr.concat(arr2);
// console.log(output)

// MAP
const output = arr.map( item =>  item*2) ;
console.log(output)

// FILTER
const op = arr.filter((x)=> x>8);
console.log(op);


// .includes
// function findsum(arr){
//     let sum=0;
//     for(let i=0; i<arr.length ; i++){
//         sum = sum + arr[i]
//     }
//       return sum;
// }
// console.log(findsum(arr))

const op1 = arr.reduce(function(sum,item){
    sum = sum+item;
    return sum;
},0);
console.log(op1);

// const output = arr.reduce(function(max,curr){
//  if(curr>max){
//      max = curr;
//  }  
//  return curr ;
// },0)
// console.log(output);   

