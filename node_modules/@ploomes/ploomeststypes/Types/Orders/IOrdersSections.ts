import { IOtherProperties } from '../OtherProperties/IOtherProperties';
import { IOrdersProducts } from './IOrdersProducts';

interface Native {
  Id?: number;
  OrderId?: number;
  Code?: number;
  Discount?: number;
  Total?: number;
  OtherProperties?: IOtherProperties;
}

interface NonNative {
  Products: IOrdersProducts[];
}

interface RealmType {}

type IOrdersSectionsSelectKeys = keyof Native;
type IOrdersSectionsExpandKeys = keyof NonNative;
type IOrdersSectionsExpandObjectArrays = Array<IOrdersSectionsExpandKeys>;

export type IOrdersSections = Native & NonNative & RealmType;
export interface IOrdersSectionsExpandObject {
  key: 'Sections';
  selectArray?: IOrdersSectionsSelectKeys[];
  expandArray?: IOrdersSectionsExpandObjectArrays;
}
