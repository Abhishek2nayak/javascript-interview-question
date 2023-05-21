var arr = [2,4,5,6,7,8,9,0]


function getNElements(arr,n) {
    if (n > arr.length -1) {
        return "false";
    }
    return arr.splice(0,n);
}


 console.log(getNElements(arr,arr[0])); 




var n = arr[0]

