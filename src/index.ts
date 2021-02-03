import { Dog, Cat } from "./Interfaces/pet.interfaces";
import { cats, dogs } from "./Services/pet.data";

//Array of Pets
const pets: Array<Dog | Cat> = [...dogs, ...cats];

//Adopt function
const adopt = (subject: Dog): void => {
  console.log(
    `We have adopted a dog: ${subject.name}, he/she is ${subject.age} years old, vaccinated and is sporty.`
  );
};
dogs.forEach((dog) => {
  adopt(dog);
});

const isDog = (pet: Cat | Dog) => {
  return Boolean((pet as Dog).bark);
};

const isCat = (pet: Cat | Dog): boolean => Boolean((pet as Cat).purr);

pets.forEach((pet) => {
  if (isDog(pet)) console.log("Dog!!!");
  else console.log("Cat!!!");
});
