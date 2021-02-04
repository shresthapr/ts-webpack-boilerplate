// import { Database } from "./Database";
import { Key } from "../Interfaces/AccountKeyData.interface";

export class Keybank implements Key {
  userId: number;
  constructor(Id: number) {
    this.userId = Id;
  }
  equals(sample: Key): boolean {
    return sample.getNumber() === this.userId;
  }

  getNumber(): number {
    return this.userId;
  }
}
