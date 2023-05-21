

function convertToUpperCase(str) {
var ans = 
   str.split(" ").map(word => {
    return word[0].toUpperCase() + word.substring(1);
   })
   return ans.join(" ");
}

console.log(convertToUpperCase("i am living in surat Gujarat"))