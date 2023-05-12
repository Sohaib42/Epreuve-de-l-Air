let arguments = process.argv.slice(2);
let addOrSub = arguments[arguments.length-1]
let number = parseInt(addOrSub.slice(1))
let finalResult = [];
if (addOrSub[0] === '+') {
for (let i = 0; i < arguments.length - 1; i++) {
    finalResult.push(parseInt(arguments[i]) + number)
  }
} else if(addOrSub[0]==='-'){
  for(let i = 0; i< arguments.length - 1; i++){
    finalResult.push(parseInt(arguments[i] - number))
  }
}else{
  console.log("IL y a un soucis, vous n'avez pas mis + ou -")
}

console.log(finalResult);
