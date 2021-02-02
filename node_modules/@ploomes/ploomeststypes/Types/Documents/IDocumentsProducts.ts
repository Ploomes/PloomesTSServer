import { IUsers, IUsersExpandObject } from '../Users/IUsers';
import { ICurrencies, ICurrenciesExpandObject } from '../Currencies/ICurrencies';
import { IProducts, IProductsExpandObject } from '../Products/IProducts';

interface Native {
  Id?: number;
  DocumentId?: number;
  SectionId?: number;
  DealId?: number;
  ContactId?: number;
  ProductId?: number;
  ProductName?: string;
  DocumentCreatorId?: number;
  Quantity?: number;
  UnitPrice?: number;
  Total?: number;
  Discount?: number;
  CurrencyId?: number;
  ContactProductId?: number;
  // TODO ADD contact product
  Editable?: boolean;
  index?: number;
}

interface NonNative {
  DocumentCreator?: IUsers;
  Currency?: ICurrencies;
  Product?: IProducts;
}

interface RealmType {}

type IDocumentsProductsSelectKeys = keyof Native;
type IDocumentsProductsExpandKeys = keyof NonNative;
export type IDocumentsProducts = Native & NonNative & RealmType;

type IDocumentsProductsExpandObjectsArray = Array<
  IDocumentsProductsExpandKeys | IUsersExpandObject | ICurrenciesExpandObject | IProductsExpandObject
>;

export interface IDocumentsProductsExpandObject {
  key: 'Products';
  selectArray?: IDocumentsProductsSelectKeys[];
  expandArray?: IDocumentsProductsExpandObjectsArray;
}
