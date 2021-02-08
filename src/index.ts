<<<<<<< HEAD
import { BankAccount } from "./classes/BankAccount";
import { Keybank } from "./classes/Keybank";

////Checks, Bank Interface working with key interface
// let userid1 = new Keybank(123);
// let user1 = new BankAccount(100, userid1);
// console.log(user1.getBalance());
// console.log(user1.deposit(200));
// console.log(user1.balance);
// console.log(user1.getKey());
=======
import { RealPlayer } from './classes/RealPlayer';
import { BotPlayer } from "./classes/BotPlayer";


const players = [
    new BotPlayer(5),
    new BotPlayer(5),
    new RealPlayer(5)
]

const dealer = new CardDealer(52);

players.forEach(player => {
    let counter = 3;
    while (Boolean(counter--)) {
        dealer.dealTo(player);
    }
})

players.forEach(player => {
    while(player.requestCard()) {
        dealer.dealTo(player);
    }
})

players.forEach(player => {
    console.log(player.reviewCards())
})
>>>>>>> upstream/black-jack
