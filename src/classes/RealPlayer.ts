import { AbstractPlayer } from "./AbstractPlayer";

export class RealPlayer extends AbstractPlayer {
  requestCard(): boolean {
    return confirm(` Sum Total ${this.getSum()}. Request more card?`);
  }
}
