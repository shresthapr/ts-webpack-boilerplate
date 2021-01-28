import { Cat, Dog, QuestionableAnimalThatAlsoPurr } from "./interfaces/pet.interfaces";
import { cats, dogs } from "./pet.data";

const animal: QuestionableAnimalThatAlsoPurr = {
    name: "Susan",
    age: 10,
    weight: 2,
    height: 3,
    microChipped: false,
    spayedOrNeutered: true,
    breed: "chepard",
    purr: () => 'grao'
};

const pets: Array<Cat | Dog> = [...dogs, ...cats];
// pets.push(...dogs, ...cats);

pets.push(animal as Cat);

console.log(pets);

const adopt = (subject: Dog): void => {
    console.log(`We have adopted a dog name ${subject.name} and is ${subject.age} years old`)
}

dogs.forEach(adopt)

// const isDog = (pet: Cat | Dog): boolean => Boolean((pet as Dog).bark)
// const isCat = (pet: Cat | Dog): boolean => Boolean((pet as Cat).purr)

const isDog = (pet: Cat | Dog): boolean => Boolean((pet as Dog).type === 'dog')
const isCat = (pet: Cat | Dog): boolean => Boolean((pet as Cat).type === 'cat')

 

pets.forEach((pet) => {
    if (isDog(pet)) console.log('Dog!')
    else console.log('Cat!')
})
