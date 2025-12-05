"use strict";
// typeassertion
let anything;
anything = "strjhnh";
const newNumber = anything.concat(" World");
console.log(newNumber);
const kgTOGMConverter = (input) => {
    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const [value] = input.split("");
        return ` Converted output ${Number(value) * 1000}`;
    }
};
const result = kgTOGMConverter("2kg");
console.log(result);
try {
}
catch (err) {
    console.log(err.message);
}
