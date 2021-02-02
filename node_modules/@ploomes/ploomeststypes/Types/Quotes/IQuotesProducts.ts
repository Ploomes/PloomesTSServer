import { IQuotesProductsParts } from './IQuotesProductsParts';
import { IOtherProperties } from '../OtherProperties/IOtherProperties';

interface Native {
  Id?: number;
  DealId?: number;
  ContactId?: number;
  QuoteId?: number;
  OwnerId?: number;
  QuoteDate?: string;
  SectionId?: number;
  ProductId?: number;
  ProductName?: string;
  Quantity?: number;
  CurrencyId?: number;
  UnitPrice?: number;
  Discount?: number;
  Total?: number;
  ContactProductId?: number;
  Editable?: boolean;
  index?: number;
}

interface NonNative {
  Parts: IQuotesProductsParts[];
  OtherProperties: IOtherProperties[];
}

interface RealmType {}

type IQuotesProductsSelectKeys = keyof Native;
type IQuotesProductsExpandKeys = keyof NonNative;
export type IQuotesProducts = Native & NonNative & RealmType;
type IQuotesProductsExpandObjectArrays = Array<IQuotesProductsExpandKeys | IQuotesProductsExpandObject>;

export interface IQuotesProductsExpandObject {
  key: 'Products';
  selectArray?: IQuotesProductsSelectKeys[];
  expandArray?: IQuotesProductsExpandObjectArrays[];
}
