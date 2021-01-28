export interface Pet {
    name: string,
    age: number,
    height?: number,
    weight: number,
    microChipped: boolean,
    breed: string,
    spayedOrNeutered: boolean
}

export interface Dog extends Pet {
    sporty: boolean,
    bark: () => void
}

export interface Cat extends Pet {
    purr: () => void
}