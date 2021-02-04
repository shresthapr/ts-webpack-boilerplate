import {
  Key,
  DataStore,
  UserAccount,
} from "../Interfaces/AccountKeyData.interface";

export class Database implements DataStore {
  userlogs: UserAccount[] = [];
  //passing an argument here in constructor means when a new instance of class
  //Database is made it has to be made with those arguments.
  constructor() {}

  insert(account: UserAccount): boolean {
    const ifmatch = this.search(account.getKey());
    if (Boolean(ifmatch)) return false;

    this.userlogs.push(account);
    return true;
  }

  search(key: Key): UserAccount | undefined {
    return this.userlogs.find((item) => item.getKey().equals(key));
  }

  delete(key: Key): boolean {
    const match = this.search(key);
    this.userlogs = this.userlogs.filter((item) => !item.getKey().equals(key));
    return Boolean(match);
  }
}
