import { Card } from "./Card";
export class CardDealer {
    constructor(counter) {
        this.deck = [];
        let i = 0;
        while (i < counter) {
            this.deck.push(new Card());
            i++;
        }
    }
    dealTo(player) {
        const card = this.deck.shift();
        player.receiveCard(card);
    }
}
