import { Keybank } from "./Keybank";
import { Key, UserAccount } from "../Interfaces/AccountKeyData.interface";

export class BankAccount implements UserAccount {
  balance: number;
  key: Key;
  constructor(b: number, K: Key) {
    this.balance = b;
    this.key = K;
  }
  deposit(amount: number): void {
    if (amount > 0 && amount < 50000) {
      this.balance += amount;
    }
  }
  getBalance(): number {
    return this.balance;
  }
  getKey(): Key {
    return this.key;
  }
}
