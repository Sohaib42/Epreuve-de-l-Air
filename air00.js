let argument = process.argv[2]
let regex = /[\s\t\n]+/;

function stringSplit(strCut,strSeparator){
    let splitedArray= [];
    let precedentI = 0;
    for (i=0; i < strCut.length;i++){
        if(strSeparator.test(strCut[i])){
            console.log(strCut.slice(precedentI,i))
            splitedArray.push(strCut.slice(precedentI,i))
            precedentI = i+1;
        }
        
    }

    splitedArray.push(strCut.slice(precedentI,strCut.length))
    console.log(splitedArray[splitedArray.length -1])

    return(splitedArray)

}

console.log(stringSplit(argument,regex));
