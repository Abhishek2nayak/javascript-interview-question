


function union(arr1,arr2) {
    

    return [...new Set(arr1.concat(arr2))]


}



console.log( union([1,3,4,5,5,5,5],[3,2,1,5,8])); 

