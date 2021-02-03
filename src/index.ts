// let db = new Database();

// let firstKey = new Key(123123);
// let firstAccount = new BankAccount(100, firstKey);
// let firstResult = db.insert(firstAccount);

// let lookupAccount = db.find(secondKey);
// console.log(lookupAccount.getBalance());
interface AccountDetails {
  balance: number;
  deposit: (amount: number) => void;
  withdraw: (amount: number) => boolean;
}

class BankAccount implements AccountDetails {
  balance: number;
  constructor(initialAmount: number) {
    this.balance = initialAmount;
  }
  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }
  withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return true;
    } else {
      console.log("Withdrawl Failed.");
      return false;
    }
  }
  checkBalance(): number {
    return this.balance;
  }
}

class MortgagePayment {
  account: AccountDetails;
  constructor(account: AccountDetails) {
    this.account = account;
  }
  makePayment(amount: number) {
    if (amount > 0) {
      let paymentOut = this.account.withdraw(amount);
      if (paymentOut) {
        console.log("Payment Successful");
      } else {
        console.log("Cannot complete payment");
      }
    } else {
      console.log("Invalid Payment");
    }
  }
}

let newAccount = new BankAccount(83210);
let balance = newAccount.checkBalance();
console.log(balance);

let paymentterminal = new MortgagePayment(newAccount);
paymentterminal.makePayment(1000);
balance = newAccount.checkBalance();
console.log(balance);
