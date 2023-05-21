/* 
How to check if an object is an array or not ?
*/


function checkIsArray(element) {
    return Array.isArray(element)
}

console.log(checkIsArray([1,3,4,5,6]))
console.log(checkIsArray({name : "Abhishek", title : "Nayak"}))
