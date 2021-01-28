import { Cat, Dog } from "./interfaces/pet.interfaces";

export const dogs: Dog[] = [{
    name: 'Sparky',
    age: 6,
    weight: 16,
    height: 40,
    microChipped: true,
    spayedOrNeutered: false,
    breed: 'Labrador',
    sporty: true,
    bark: () => console.log('Woof woof!')
},
{
    name: 'Chip',
    age: 8,
    weight: 25,
    height: 52,
    microChipped: true,
    spayedOrNeutered: true,
    breed: 'Dalmatian',
    sporty: true,
    bark: () => console.log('Ruf ruf!')
}];

export const cats: Cat[] = [
    {
        type: 'cat',
        name: "Susan",
        age: 10,
        weight: 2,
        height: 3,
        microChipped: false,
        spayedOrNeutered: true,
        breed: "chepard",
        purr: () => console.log("meow"),
    },
    {
        type: 'cat',
        name: "Kate",
        age: 100,
        weight: 2,
        height: 3,
        microChipped: false,
        spayedOrNeutered: true,
        breed: "chepard",
        purr: () => console.log("meow"),
    },
];