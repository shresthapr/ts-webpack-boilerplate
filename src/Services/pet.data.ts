import { Dog, Cat } from "../Interfaces/pet.interfaces";

export const dogs: Dog[] = [
  {
    name: "Bingo",
    age: 10,
    weight: 10,
    height: 10,
    microChipped: true,
    spayedOrNeutered: true,
    breed: "poodle",
    sporty: true,
    bark: () => {
      console.log("BingoPoodle");
    },
  },
  {
    name: "abcd",
    age: 10,
    weight: 10,
    height: 10,
    microChipped: true,
    spayedOrNeutered: true,
    breed: "doodle",
    sporty: true,
    bark: () => {
      console.log("abcdDoodle");
    },
  },
];

export const cats: Cat[] = [
  {
    name: "catone",
    age: 10,
    weight: 10,
    height: 10,
    microChipped: true,
    spayedOrNeutered: true,
    breed: "breed1",
    purr: () => {
      console.log("catone_breed1");
    },
  },
  {
    name: "cat2",
    age: 10,
    weight: 10,
    height: 10,
    microChipped: true,
    spayedOrNeutered: true,
    breed: "breed2",
    purr: () => {
      console.log("catone_breed2");
    },
  },
];
