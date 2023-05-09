let arguments = process.argv.slice(2);

function concatwithSprt(array,separator){
    let stringResult ="";
    for(let i = 0; i < array.length;i++){
        stringResult += array[i] + separator
    }
    return stringResult;
}
console.log(concatwithSprt(arguments.slice(0,-1),arguments[arguments.length-1]))