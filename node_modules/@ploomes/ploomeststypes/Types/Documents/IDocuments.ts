import { IOtherProperties } from '../OtherProperties/IOtherProperties';
import { IFieldsEntities, IFieldsEntitiesExpandObject } from '../Fields/IFIeldsEntities';
import { IDocumentsProducts, IDocumentsProductsExpandObject } from './IDocumentsProducts';
import { IContacts, IContactsExpandObject } from '../Contacts/IContacts';
import { ICurrencies, ICurrenciesExpandObject } from '../Currencies/ICurrencies';
import { IDocumentsSections, IDocumentsSectionsExpandObject } from './IDocumentsSections';

interface INonNativeDocuments {
  Entity?: IFieldsEntities;
  SecondaryEntity?: IFieldsEntities;
  Products?: Array<IDocumentsProducts>;
  OtherProperties?: Array<IOtherProperties>;
  Contact?: IContacts;
  Currency?: ICurrencies;
  Sections?: IDocumentsSections[];
}

interface INativeDocuments {
  Id?: number;
  Name?: string;
  ContactId?: number;
  ContactName?: string;
  CreateDate?: string;
  EntityId?: number;
  CurrencyId?: number;
  SecondaryEntityId?: number;
  FormId?: number;
  Default?: boolean;
  HeaderSourceCode?: string;
  HeaderHeight?: number;
  FooterSourceCode?: string;
  FooterHeight?: number;
  BodySourceCode?: string;
  TopMargin?: number;
  BottomMargin?: number;
  SideMargin?: number;
  CoverSourceCode?: string;
  HasCoverPage?: boolean;
  HasPaging?: boolean;
  NewFormat?: boolean;
  InstallmentsAmountFieldKey?: string;
  InstallmentsRequired?: boolean;
  Editable?: boolean;
  LastUpdateDate?: string;
  FileNameFormula?: string;
  TemplateId?: number;
}

interface RealmTypes {
  LocalId?: string;
}

export type IDocuments = INativeDocuments & INonNativeDocuments & RealmTypes;
export type TDocumentsSelectKeys = keyof INativeDocuments;
export type TDocumentsExpandKeys = keyof INonNativeDocuments;

export interface IDocumentsExpandObject {
  key: 'Document' | 'LastDocument';
  selectArray?: TDocumentsSelectKeys[];
  expandArray?: TDocumentsExpandKeys[];
}

type TDocumentsExpandObjectArrays = Array<
  | TDocumentsExpandKeys
  | IFieldsEntitiesExpandObject
  | IDocumentsProductsExpandObject
  | IContactsExpandObject
  | ICurrenciesExpandObject
  | IDocumentsSectionsExpandObject
>;

export interface TDocumentsSelectExpandArrays {
  selectArray?: Array<TDocumentsSelectKeys>;
  expandArray?: TDocumentsExpandObjectArrays;
  entity: 'documents';
}
