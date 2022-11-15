function findMaxProduct(arr){
  
    // let maxProd = -999999;
    // let i = 1;
    // while (i<=arr.length){
      
    //   let prod = 1;
    //   let j = i;
    //   for (let h = 0; h < Math.floor(arr.length/i); h++){
    //       if(arr[j-1] !== undefined) prod *= arr[j-1]
  
    //       j+=i
    //   }
    //   if (prod > maxProd) maxProd = prod
    //   i++
    // }
    // return maxProd
    
    return Math.max(...arr.map((_, i) => arr.filter((_, j) => (j + 1) % (i + 1) === 0).reduce((a, b) => a * b, 1)));
  }

console.log(findMaxProduct([11, 6, -2, 0, 5, -4, 2]))