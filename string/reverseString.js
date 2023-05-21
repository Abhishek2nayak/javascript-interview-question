/**
 * Reverse the each word in given string
 */

var str = "hello world!"

var ans = str.split(" ").map(word => {
    return word.split("").reverse().join("")
})

console.log(ans.join(" ")) //output : olleh !dlrow


