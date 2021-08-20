import {IAnimal} from "./animal";
import {IOwner} from "./owner";

export interface IPet extends IAnimal {
  owner: IOwner;
}
