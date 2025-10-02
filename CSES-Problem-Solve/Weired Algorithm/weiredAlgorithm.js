const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();
let number = Number(input);
let output = [number];

while(number !== 1){
    if(number % 2 == 0){
        number /=  2;
        output.push(number);
    }

    else{
        number = number * 3 + 1;
        output.push(number);
    }
}

console.log(output.join(' '))
