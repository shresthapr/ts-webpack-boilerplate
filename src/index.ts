import { Dog } from "./interfaces/pet.interfaces";

const dogs: Dog[] = [{
    name: 'Sparky',
    age: 6,
    weight: 16,
    height: 40,
    microChipped: true,
    spayedOrNeutered: false,
    breed: 'Labrador',
    sporty: true,
    bark: ()=>console.log('Woof woof!')
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
    bark: ()=>console.log('Ruf ruf!')
}];

const adopt = (subject: Dog): void => {
    console.log(`We have adopted a dog name ${subject.name} and is ${subject.age} years old`)
}

dogs.forEach(adopt)
