import { ICurrencies, ICurrenciesExpandObject } from '../Currencies/ICurrencies';

interface Native {
  Id: number;
  DocumentId: number;
  Discount: number;
  Total: number;
  CurrencyId: number;
  Code: number;
}

interface NonNative {
  Currency: ICurrencies;
}

interface RealmType {}

type IDocumentsSectionsSelectKeys = keyof Native;
type IDocumentsSectionsExpandKeys = keyof NonNative;
export type IDocumentsSections = Native & NonNative & RealmType;

type IDocumentsSectionsExpandObjectsArray = Array<IDocumentsSectionsExpandKeys | ICurrenciesExpandObject>;

export interface IDocumentsSectionsExpandObject {
  key: 'Sections';
  selectArray?: IDocumentsSectionsSelectKeys[];
  expandArray?: IDocumentsSectionsExpandObjectsArray;
}
