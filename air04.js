let inputString = process.argv[2];
let finalResult = "";

for (let i = 0; i < inputString.length; i++) {
  if (inputString[i] !== inputString[i + 1]) {
    finalResult += inputString[i];
  }
}

console.log(finalResult);
