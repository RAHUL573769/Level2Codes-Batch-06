"use strict";
let anything2 = "hr";
const converted = anything2.toLowerCase;
console.log(converted);
// ---------------
const kgToGramConverter = (input) => {
    if (typeof input === "number") {
        return input * 100;
    }
    else if (typeof input === "string") {
        const [value] = input.split(" ");
        const output = `${value}*100`;
        return output;
    }
};
const output2 = kgToGramConverter(2);
console.log(output2);
try {
}
catch (error) {
    console.log(error.message);
}
