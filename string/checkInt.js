//check number int or not


function checkInt1(num) {
    let temp = Math.floor(num)
    return (num == temp);
}

function checkInt2(num) {

    return num % 1 == 0;
}



console.log(checkInt1(4899));
console.log(checkInt2(4899));
console.log(checkInt1(34.55));
console.log(checkInt2(34.55));