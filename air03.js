let arguments = process.argv.slice(2);
let finalResult =""
for(let i = 0;i<arguments.length;i++){
let hasPair = false;
    for(let j = i + 1; j < arguments.length;j++){
    if(arguments[i] === arguments[j]){
        hasPair = true;
        break;
    }

}
if(!hasPair){
    finalResult =arguments[i];
    break;
}
}
console.log(finalResult)