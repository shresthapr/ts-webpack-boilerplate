interface Pet {
    name: string,
    age: number,
    height?: number,
    weight: number,
    microChipped: boolean,
    breed: string,
    spayedOrNeutered: boolean
}

export interface Dog extends Pet {
    type: string,
    sporty: boolean,
    bark: () => void
}

export interface Cat extends Pet {
    type: string,
    purr: () => void
}

export interface QuestionableAnimalThatAlsoPurr extends Pet {
    purr: () => string
}