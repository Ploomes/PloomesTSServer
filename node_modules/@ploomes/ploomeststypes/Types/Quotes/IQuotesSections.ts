import { IQuotesProducts, IQuotesProductsExpandObject } from './IQuotesProducts';
import { IOtherProperties } from '../OtherProperties/IOtherProperties';

interface Native {
  Id: number;
  QuoteId: number;
  Code: number;
  Discount: number;
  CurrencyId: number;
  Total: number;
}

interface NonNative {
  Products: IQuotesProducts[];
  OtherProperties: IOtherProperties;
}

interface RealmType {}

type IQuotesSectionsSelectKeys = keyof Native;
type IQuotesSectionsExpandKeys = keyof NonNative;
type IQuotesSectionsExpandObjectArrays = Array<IQuotesSectionsExpandKeys | IQuotesProductsExpandObject>;

export type IQuotesSections = Native & NonNative & RealmType;
export interface IQuotesSectionsExpandObject {
  key: 'Sections';
  selectArray?: IQuotesSectionsSelectKeys[];
  expandArray?: IQuotesSectionsExpandObjectArrays;
}
