import {ISpecies} from "./species";

export interface IAnimal {
  id?: string;
  birthDay: string;
  species: ISpecies;
  vaccinated: boolean;
}
