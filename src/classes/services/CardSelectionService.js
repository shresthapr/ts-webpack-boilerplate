export class CardSelectionService {
    getOneOrZero() {
        return Math.floor(Math.random() * 2);
    }
    decide() {
        return Boolean(this.getOneOrZero);
    }
}
