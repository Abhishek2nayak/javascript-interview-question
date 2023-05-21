


function getOccur(str) {
    let obj = {}
   str.split("").forEach(c => {
    if(!obj.hasOwnProperty(c)) {
    obj[c] = 1
    } else {
    obj[c] = obj[c] +  1
    }
  });
  console.log(obj)
}

getOccur('abhishek')