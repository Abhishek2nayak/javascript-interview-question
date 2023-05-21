

function freqArray(arr) {
   var freq = {}
   arr.forEach(ele => {
    if (freq.hasOwnProperty(ele)) {
        freq[ele]++;
    } else {
        freq[ele] = 1
    }
   }); 

   maxOccr(freq)
}


freqArray([1,2,3,1,3,4,1,4,5,])

function maxOccr(freq) {
    var max = 0
    var num = ''

    for (const key in freq) {
       if(freq[key] > max) {
        max = freq[key]
        num = key
       }
    }
    console.log(num + " => " +max);

}