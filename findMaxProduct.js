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
    //-----------------------------------
    //return Math.max(...arr.map((_, i) => arr.filter((_, j) => (j + 1) % (i + 1) === 0).reduce((a, b) => a * b, 1)));
    //----------------
    let result=[]
    let product=1
    for(let i=0;i<arr.length;i++){
      for(let j=i; j<arr.length;j +=i+1){
        product *=arr[j]
      }
      result.push(product)
      product=1
    }
    return Math.max(...result)
  }

console.log(findMaxProduct([11, 6, -2, 0, 5, -4, 2]))