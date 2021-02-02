import { IOtherProperties } from '../OtherProperties/IOtherProperties';
import { IProducts, IProductsExpandObject } from '../Products/IProducts';

interface Native {
  Id: number;
  ContactId: number;
  ProductId: number;
  Name: string;
  debName: string;
  Code: string;
  CreatorId: number;
  CreateDate: string;
  UpdaterId: number;
  Editable: boolean;
  LastUpdateDate: string;
  Deletable: boolean;
}

interface NonNative {
  OtherProperties: IOtherProperties[];
  Product: IProducts;
}

interface RealmType {
  LocalId?: string;
}

type IContactsProductsSelectKeys = keyof Native;
type IContactsProductsExpandKeys = keyof NonNative;
type IContactsProductsExpandObjectArrays = Array<IContactsProductsExpandKeys | IProductsExpandObject>;

export type IContactsProducts = Native & NonNative & RealmType;
export interface IContactsProductsExpandObject {
  key: 'Products';
  selectArray?: IContactsProductsSelectKeys[];
  expandArray?: IContactsProductsExpandObjectArrays;
}

export interface IContactsProductsSelectExpandArrays {
  selectArray?: Array<IContactsProductsSelectKeys>;
  expandArray?: IContactsProductsExpandObjectArrays;
  entity: 'contactsProducts';
}
