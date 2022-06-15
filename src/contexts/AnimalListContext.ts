import { createContext } from "react";
import { IAnimal } from "../models/IAnimal";

export interface IAnimalFed {
  animals: IAnimal[];
  feedAnimal(updatedList: IAnimal[]): void;
}

const LOCAL_STORAGE_LIST_KEY = "animals";

export const animals: IAnimal[] = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_LIST_KEY) || "[]"
);

export const animalFed: IAnimalFed = {
  animals: animals,
  feedAnimal: () => {},
};

export const AnimalListContext = createContext<IAnimalFed>(animalFed);
