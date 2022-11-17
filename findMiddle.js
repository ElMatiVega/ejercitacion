

function findMiddle(haystack, needle) {
    // for(let i=0;i<haystack.length;i++){
    //     for(let j=0;j<needle.length;j++){
    //         if(haystack[i+j]===needle[j]){
    //             console.log(haystack[i+j])
    //         }else{
    //             break
    //         }
    //         if(j===needle.length-1){
    //             return i
    //         }
    //     }
    // }
    // return -1
  
    // for(let i=0;i<haystack.length;i++){
    //     for(let j=0;j<needle.length;j++){
    //         if(haystack[i+j]!==needle[j]) break
    //         if(j===needle.length-1)return i
    //     }
    // }
    // return -1

    for(let i=0; i  < haystack.length - needle.length + 1;i++){
        console.log(haystack.length - needle.length + 1 )
          if(haystack[i] === needle[0]){
            console.log(haystack[i] )
            if(haystack.slice(i, needle.length + i) === needle)  return i
      
          }
        }
        return -1
}

console.log(findMiddle("react-redux", "redux"))
console.log(findMiddle("pinky", "puntual"))
console.log(findMiddle("rereredux", "reredux"))


