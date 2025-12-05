"use strict";
class BankAccount {
    constructor(userId1, userName1, userBalance1) {
        this.userBalance = userBalance1;
        this.userId = userId1;
        this.userName = userName1;
    }
    addBalance(balance) {
        this.userBalance = balance + this.userBalance;
    }
}
const rahulBankAccount = new BankAccount(123, "53", 5);
// rahulBankAccount.userBalance=89
console.log(rahulBankAccount.addBalance(100));
// --------------
class BankAccount1 {
    constructor(userId1, userName1, userBalance1) {
        this.userId = userId1;
        this.userName = userName1;
        this.userBalance = userBalance1;
    }
    addBalance(balance) {
        this.userBalance += balance;
        return this.userBalance; // FIXED
    }
    getBalance() {
        return this.userBalance; // optional getter
    }
}
const rahulBankAccount1 = new BankAccount1(123, "53", 5);
console.log(rahulBankAccount1.addBalance(100)); // prints 105
console.log(rahulBankAccount1.getBalance()); // prints 105
