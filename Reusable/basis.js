// const hi = name => console.log(`Hi ${name}`);
// hi('Oles');

// const range = (start,end)=>{
//     const arr = [];
//   for (;start<=end; start++){
//       if(start%2 === 1){
//           arr.push(start);
//       }
//   }
//   console.log(arr);
// };
//
// range(15,30);

const average = (first, second)=>(first+second)/2;
const square = (number)=> number*number;
const cube = (number)=> number*number*number;

const calculate = () =>{
    const arr = [];
    for(let i = 0; i<9; i++){
       arr.push(average(square(i),cube(i)));
    }
    return arr;
};

console.dir(calculate());