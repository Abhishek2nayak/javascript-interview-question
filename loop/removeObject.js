//remove objecs which don't have gender value male

var arr = [
    {name : 'rajesh',gender: 'male'},
    {name : 'suhana',gender: 'female'}
   
]

// count the non-male in arr

var count = 0

arr.forEach(obj => {
    if(obj.gender !== 'male') count++;
})


//delete the non-male object

for(var i  = 0; i <= count; i++) {
    for(var j = 0; j < arr.length; j++) {
        if (arr[j].gender !== 'male') {
            arr.splice(j,1);
        }
    }
}

console.log(arr);