let arguments = process.argv.slice(2);
let newElement = arguments[arguments.length - 1];
let baseElements = arguments.slice(0, arguments.length - 1);
let result =[];

function returnNewArraySorted(arr,int){


    for(let i = 0; i < arr.length;i++){
        if(parseInt(arr[i]) < int){
            if(parseInt(arr[i+1]) > int){
                arr.splice(i+1,0,int);
                result = arr.join()
                break;
            }
        }
    }
    return (result)
}
console.log(returnNewArraySorted(baseElements,newElement));
