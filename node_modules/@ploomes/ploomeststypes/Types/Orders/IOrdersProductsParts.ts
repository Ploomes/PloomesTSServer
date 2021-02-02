import { IOtherProperties } from '../OtherProperties/IOtherProperties';

interface Native {
  Id?: number;
  OrderProductId?: number;
  PartId?: number;
  ProductId?: number;
  ProductName?: string;
  Quantity?: number;
  CurrencyId?: number;
  UnitPrice?: number;
  Discount?: number;
  Total?: number;
  Code?: string;
  OtherProperties: IOtherProperties[];
}

interface NonNative {}

interface RealmType {}

type IOrdersProductsPartsSelectKeys = keyof Native;
type IOrdersProductsPartsExpandKeys = keyof NonNative;
type IOrdersProductsPartsExpandObjectArrays = Array<IOrdersProductsPartsExpandKeys>;

export type IOrdersProductsParts = Native & NonNative & RealmType;
export interface IOrdersProductsPartsExpandObject {
  key: 'Parts';
  selectArray?: IOrdersProductsPartsSelectKeys[];
  expandArray?: IOrdersProductsPartsExpandObjectArrays;
}
