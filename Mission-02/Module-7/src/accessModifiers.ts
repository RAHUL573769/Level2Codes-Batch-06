class BankAccount {
  public userId: number;
  userName: string;
  private userBalance: number;
  constructor(userId1: number, userName1: string, userBalance1: number) {
    this.userBalance = userBalance1;
    this.userId = userId1;
    this.userName = userName1;
  }
  addBalance(balance: number) {
    this.userBalance = balance + this.userBalance;
  }
}

const rahulBankAccount = new BankAccount(123, "53", 5);
// rahulBankAccount.userBalance=89
console.log(rahulBankAccount.addBalance(100));
// --------------

class BankAccount1 {
  public userId: number;
  userName: string;
  private userBalance: number;

  constructor(userId1: number, userName1: string, userBalance1: number) {
    this.userId = userId1;
    this.userName = userName1;
    this.userBalance = userBalance1;
  }

  addBalance(balance: number) {
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
