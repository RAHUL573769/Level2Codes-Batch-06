"use strict";
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
//Objects
const poorUser = {
    name: "Mezba",
    balance: 0,
    addBalance(value) {
        const totalBalance = this.balance + value;
        return totalBalance;
    }
};
