//reverse a number
var num = 1234
temp = num
ans = 0
while(temp >0) {
    var rem = temp % 10;
   ans = ans * 10 + rem;
   temp = parseInt(temp / 10);
}
console.log("Original Number : "+num);

console.log("Number After reverse :"+ans);