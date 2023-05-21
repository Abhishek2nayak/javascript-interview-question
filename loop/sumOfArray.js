var arr = [1,2,3,4,5,'hello','sckjz']

var sum = 0
arr.forEach(num => {
    if(typeof(num) == 'number') {
        sum += num
    }
})

console.log(sum);
// for number only 
