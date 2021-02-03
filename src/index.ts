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
    } else {
      console.log("Invalid deposit Sum");
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
