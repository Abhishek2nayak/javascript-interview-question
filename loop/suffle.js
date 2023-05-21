


function suffle(arr) {
   for(var i = arr.length -1; i >= 0; i--) {
     var idx =Math.floor( Math.random() * i);
     var temp = arr[i]
     arr[i] = arr[idx]
     arr[idx] = temp
   }
   console.log(arr)
}


suffle([1,2,3,4,7,3])