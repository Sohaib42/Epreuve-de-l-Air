let arguments = process.argv.slice(2);
let stringToFind = arguments[arguments.length - 1];
let stringToMatch = arguments.slice(0, arguments.length - 1);
let result =[];
function returnNotMatching(arr,string){

    for (let i = 0; i < arr.length; i++) {
        let found = false;  
        for (let j = 0; j < arr[i].length; j++) {
          if (arr[i][j].toUpperCase() === string.toUpperCase()) {
            found = true;
            break;
          }
        }
        if (!found) {
            result.push(stringToMatch[i]);
          }
    }   
    return (result.toString());

}
console.log(returnNotMatching(stringToMatch,stringToFind));
