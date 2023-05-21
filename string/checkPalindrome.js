
function isPalindrome(s) {
   let rev = s.split("").reverse().join("")
   return s === rev
}
console.log(isPalindrome('wow'));  //true
console.log(isPalindrome('hello'));  //false