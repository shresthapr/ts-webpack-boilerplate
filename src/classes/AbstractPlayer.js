export class AbstractPlayer {
    constructor(max) {
        this.holdings = [];
        this.max = max;
    }
    receiveCard(card) {
        if (this.holdings.length < this.max && card !== undefined) {
            this.holdings.push(card);
        }
    }
    reviewCards() {
        return this.holdings;
    }
}
