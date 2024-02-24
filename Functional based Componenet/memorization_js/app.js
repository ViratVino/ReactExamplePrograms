// let sum=0;
// const calc=n=>{
//     for(let i=0;i<=n;i++){
//         sum+=1;
//     }

//     return sum;
// }

// const memorize =func =>{//     let cache ={};
//     return function (...args){
//         let n=args[0];
//         if(n in cache){
//             console.log("Data is Coming From Cache");
//         }else{
//             console.log("Calculating The First Time");
//             let result=func(n);
//             cache[n]=result;
//             return result;
//         }
//     }
// }



// console.log("Before Memorization");
// console.log(calc(5));
// console.log("After Memorization");


// console.log("============After Optimization============");

// console.log("Before Memorization");

// console.time();
// let efficientWay=memorize(calc);
// console.log(efficientWay(6));
// console.timeEnd();

// console.log("After Memorization");



function sum(...rest){
    return rest.reduce((acc,val)=>acc+val);
}

// let keys=["Vinoth","Nisha",10];
// console.log(keys);
// console.log(JSON.stringify(keys));
// console.log(typeof(JSON.stringify(keys)));

const Memorization=func =>{
    let cache={};
    return function(...args){
      let keys=JSON.stringify(args);
      if(cache[keys]){
        console.log(cache);
        console.log("Data is Coming From Cache");
        return cache[keys]
      }else {
        console.log("First Time Executing ... and Calculating");
        const result=func(...args);
        cache[keys]=result;
        return result;

      }


    }
}


let calculate =Memorization(sum);
console.time();
console.log(calculate(5,5));
console.timeEnd();


//second Time

console.warn("================Second Time After is same input=====================");
console.time();
console.log(calculate(5,5));
console.timeEnd();