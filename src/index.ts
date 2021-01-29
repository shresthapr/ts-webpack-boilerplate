import { ComputerTwo } from './classes/ComputerTwo';
import { ComputerOne } from "./classes/ComputerOne";

let computerOne: ComputerOne = new ComputerOne(1);
let computerTwo = new ComputerTwo(computerOne);
computerTwo.printConversion(3);
