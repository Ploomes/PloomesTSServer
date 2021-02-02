import { IOrders, IOrdersExpandObject } from './IOrders';
import { IUsers } from '../Users/IUsers';
import { ICurrencies, ICurrenciesExpandObject } from '../Currencies/ICurrencies';
import { IProducts, IProductsExpandObject } from '../Products/IProducts';
import { IOtherProperties } from '../OtherProperties/IOtherProperties';

interface Native {
  Id?: number;
  OrderId?: number;
  OwnerId?: number;
  OrderDate?: string;
  SectionId?: number;
  DealId?: number;
  ContactId?: number;
  ProductId?: number;
  ProductName?: string;
  Quantity?: number;
  CurrencyId?: number;
  UnitPrice?: number;
  Discount?: number;
  Total?: number;
  Bonus?: boolean;
  ContactProductId?: number;
  Editable?: boolean;
  index?: number;
}

interface NonNative {
  Order?: IOrders;
  Owner?: IUsers;
  Product?: IProducts;
  Currency?: ICurrencies;
  OtherProperties: IOtherProperties[];
}

interface RealmType {}

type IOrdersProductsSelectKeys = keyof Native;
type IOrdersProductsExpandKeys = keyof NonNative;
export type IOrdersProducts = Native & NonNative & RealmType;

type IOrdersProductsExpandObjectArray = Array<
  IOrdersProductsExpandKeys | IOrdersExpandObject | IProductsExpandObject | ICurrenciesExpandObject
>;

export interface IOrdersProductsExpandObject {
  key: 'Products';
  selectArray?: IOrdersProductsSelectKeys[];
  expandArray?: IOrdersProductsExpandObjectArray;
}
