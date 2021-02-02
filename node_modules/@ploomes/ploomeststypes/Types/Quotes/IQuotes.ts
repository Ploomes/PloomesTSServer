import { IContacts, IContactsExpandObject } from '../Contacts/IContacts';
import { IDeals, IDealsExpandObject } from '../Deals/IDeals';
import { IUsers, IUsersExpandObject } from '../Users/IUsers';
import { ICurrencies, ICurrenciesExpandObject } from '../Currencies/ICurrencies';
import { IOtherProperties, IOtherPropertiesExpandObject } from '../OtherProperties/IOtherProperties';
import { IDocumentTemplates, IDocumentTemplatesExpandObject } from '../DocumentTemplates/IDocumentTemplates';
import { IQuotesApprovalStatus, IQuotesApprovalStatusExpandObject } from './IQuotesApprovalStatus';
import {
  IDocumentTemplatesPages,
  IDocumentTemplatesPagesExpandObject,
} from '../DocumentTemplates/IDocumentTemplatesPages';
import { IQuotesProducts, IQuotesProductsExpandObject } from './IQuotesProducts';
import { IQuotesSections, IQuotesSectionsExpandObject } from './IQuotesSections';

interface INonNativeQuotes {
  Contact?: IContacts;
  Deal?: IDeals;
  Owner?: IUsers;
  Template?: IDocumentTemplates;
  ApprovalStatus?: IQuotesApprovalStatus;
  Person?: IContacts;
  Currency?: ICurrencies;
  OtherProperties?: Array<IOtherProperties>;
  Pages?: Array<IDocumentTemplatesPages>;
  Products?: Array<IQuotesProducts>;
  Sections?: IQuotesSections[];
}

interface INativeQuotes {
  Id?: number;
  ContactId?: number;
  ContactName?: string;
  DealId?: number;
  OwnerId?: number;
  TemplateId?: number;
  IsTemplate?: boolean;
  Date?: string;
  QuoteNumber?: number;
  ReviewNumber?: number;
  LastReview?: boolean;
  LastReviewId?: number;
  Approver?: boolean;
  ApprovalStatusId?: number;
  ApprovalLevelId?: number;
  PersonId?: number;
  PersonName?: string;
  CurrencyId?: number;
  Amount?: number;
  Discount?: number;
  ExpirationDate?: string;
  InstallmentsNumber?: number;
  DeliveryTime?: string;
  PaymentMethod?: string;
  Title?: string;
  Description?: string;
  Notes?: string;
  FreightModal?: string;
  FreightCost?: string;
  Key?: string;
  Shared?: boolean;
  EmailSenderTypeId?: number;
  EmailSenderUserId?: number;
  ExternallyAccepted?: boolean;
  ExternalNotifications?: boolean;
  ExternalSharingDate?: string;
  HeaderSourceCode?: string;
  HeaderHeight?: number;
  FooterSourceCode?: string;
  FooterHeight?: number;
  BodySourceCode?: string;
  PreviewSourceCode?: string;
  TopMargin?: number;
  BottomMargin?: number;
  SideMargin?: number;
  HasCoverPage?: boolean;
  CoverSourceCode?: string;
  HasPaging?: boolean;
  FileName?: string;
  EmailId?: number;
  DocumentUrl?: string;
  CreatorId?: number;
  UpdaterId?: number;
  CreateDate?: string;
  LastUpdateDate?: string;
  LastExternallyOpeningDate?: string;
  Editable?: boolean;
}

interface RealmTypes {
  LocalId?: string;
}

export type IQuotes = INonNativeQuotes & INativeQuotes & RealmTypes;
export type TQuotesSelectKeys = keyof INativeQuotes;
export type TQuotesExpandKeys = keyof INonNativeQuotes;

export interface IQuotesExpandObject {
  key: 'Quote' | 'LastQuote';
  selectArray?: TQuotesSelectKeys[];
  expandArray?: TQuotesExpandKeys[];
}

type TQuotesExpandObjectsArray = Array<
  | TQuotesExpandKeys
  | IContactsExpandObject
  | IDealsExpandObject
  | IUsersExpandObject
  | IDocumentTemplatesExpandObject
  | IQuotesApprovalStatusExpandObject
  | ICurrenciesExpandObject
  | IOtherPropertiesExpandObject
  | IDocumentTemplatesPagesExpandObject
  | IQuotesProductsExpandObject
  | IQuotesSectionsExpandObject
>;

export interface TQuotesSelectExpandArrays {
  selectArray?: Array<TQuotesSelectKeys>;
  expandArray?: TQuotesExpandObjectsArray;
  entity: 'quotes';
}

// 55469C7759BC4E5114FA24FFF5A358C422008F6534726ECCBF504BBA09F8405A038D17A473460163316BB47273E6967D3BB226D78534D091750FE6A43CDA4B94
