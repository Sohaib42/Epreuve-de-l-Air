let argument = process.argv[2]
let stringSeparator = process.argv[3];

function stringSplit(strCut,strSeparator){
    let splitedArray= [];
    let currentSubstring = '';
    for (let i = 0; i < strCut.length;i++){
        for(let j = 0; j < strSeparator.length;j++){
            if(strCut[i+j] !== strSeparator[j]){
                currentSubstring ='';
                break;
            }
            currentSubstring += strCut[i+j];
        }

        if(currentSubstring === strSeparator){
            splitedArray.push(strCut.slice(0,i));
            strCut = strCut.slice(i + strSeparator.length);
            i= -1;
        }
        currentSubstring = '';
    }

    splitedArray.push(strCut);

    return splitedArray;

}

console.log(stringSplit(argument,stringSeparator)[0]);
console.log(stringSplit(argument,stringSeparator)[1]);

