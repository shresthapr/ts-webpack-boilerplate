import { ComputerOne } from "./Classes/ComputerOne";
import { ComputerTwo } from "./Classes/ComputerTwo";

console.log("hello world");

let computerOne: ComputerOne = new ComputerOne(1);
let computerTwo: ComputerTwo = new ComputerTwo(computerOne);
computerTwo.printConversion(3);
