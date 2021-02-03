interface Pet {
  name: string;
  age: number;
  weight: number;
  height?: number;
  microChipped: boolean;
  spayedOrNeutered: boolean;
  breed: string;
  price?: number;
}

export interface Dog extends Pet {
  sporty: boolean;
  bark: () => void;
}

export interface Cat extends Pet {
  purr: () => void;
}
