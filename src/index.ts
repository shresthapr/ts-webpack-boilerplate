import { Database } from "./classes/Database";
import { BankAccount } from "./classes/BankAccount";
import { Keybank } from "./classes/Keybank";

let db = new Database();

let userid1 = new Keybank(123);
let user1 = new BankAccount(100, userid1);
console.log("Return balance available", user1.getBalance());
db.insert(user1);

let userid2 = new Keybank(4321);
let user2 = new BankAccount(200, userid2);
console.log("user has", user2.getBalance(), "available");
console.log("will deposit", user2.deposit(200));
console.log("user's new balance after deposit is", user2.getBalance());
console.log("will return user's key", user2.getKey());
let match = db.search(userid2);
console.log("Retruns account detail if found", match);

//adding new user to database
let customerlog = db.insert(user2);
console.log("customerlog true if added", customerlog);
let remove = db.delete(userid2);
console.log("For Succesful removal return True", remove);
match = db.search(userid1);
console.log("If deleted=> undefined, else=>account", match);

let user3 = new Keybank(312);
console.log("will return getNumber() from keybank", user3.getNumber());
console.log("equals() from keybank, true if match", user3.equals(user3));
console.log("equals() from keybank, false if Nomatch", user3.equals(userid1));
