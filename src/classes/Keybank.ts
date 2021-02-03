import { Database } from "./Database";
import { Key } from "../Interfaces/AccountKeyData.interface";

export class Keybank implements Key {
  userKey: number;
  userlogs: Database[] = [];
  constructor(userid: number, users: Database) {
    this.userKey = userid;
    this.userlogs.push(users);
  }
  equals(inputKey: Key) {
    if (inputKey) {
      for (let user of this.userlogs) {
        if (user.key === inputKey) {
          return true;
        }
      }
      return false;
    }
    return false;
  }

  getNumber(): number {
    return 123;
  }
}
