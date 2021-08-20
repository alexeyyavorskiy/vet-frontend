import {IAddress} from "./address";

export interface IOwner {
  id?: string;
  fullName: string;
  address: IAddress;
}
