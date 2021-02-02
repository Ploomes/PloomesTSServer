interface Native {
  Id?: number;
  QuoteProductId?: number;
  PartId?: number;
  ProductId?: number;
  ProductName?: string;
  Quantity?: number;
  CurrencyId?: number;
  UnitPrice?: number;
  Discount?: number;
  Total?: number;
  Code?: string;
}

interface NonNative {}

interface RealmType {}

type IQuotesProductsPartsSelectKeys = keyof Native;
type IQuotesProductsPartsExpandKeys = keyof NonNative;
type IQuotesProductsPartsExpandObjectArrays = Array<IQuotesProductsPartsExpandKeys>;

export type IQuotesProductsParts = Native & NonNative & RealmType;
export interface IQuotesProductsPartsExpandObject {
  key: 'Parts';
  selectArray?: IQuotesProductsPartsSelectKeys[];
  expandArray?: IQuotesProductsPartsExpandObjectArrays;
}
