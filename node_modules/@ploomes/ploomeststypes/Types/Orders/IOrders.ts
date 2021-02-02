import { IContacts, IContactsExpandObject } from '../Contacts/IContacts';
import { IDeals, IDealsExpandObject } from '../Deals/IDeals';
import { IUsers, IUsersExpandObject } from '../Users/IUsers';
import { IDocumentTemplates, IDocumentTemplatesExpandObject } from '../DocumentTemplates/IDocumentTemplates';
import { IQuotes, IQuotesExpandObject } from '../Quotes/IQuotes';
import { IOtherProperties, IOtherPropertiesExpandObject } from '../OtherProperties/IOtherProperties';
import {
  IDocumentTemplatesPages,
  IDocumentTemplatesPagesExpandObject,
} from '../DocumentTemplates/IDocumentTemplatesPages';
import { IOrdersStages, IOrdersStagesExpandObject } from './IOrdersStages';
import { IOrdersProducts, IOrdersProductsExpandObject } from './IOrdersProducts';
import { IOrdersSections, IOrdersSectionsExpandObject } from './IOrdersSections';

interface INonNativeOrders {
  Contact?: IContacts;
  Person?: IContacts;
  Deal?: IDeals;
  Stage?: IOrdersStages;
  Owner?: IUsers;
  Creator?: IUsers;
  Updater?: IUsers;
  Template?: IDocumentTemplates;
  OtherProperties?: Array<IOtherProperties>;
  OriginQuote?: IQuotes;
  Pages?: Array<IDocumentTemplatesPages>;
  Sections?: IOrdersSections[];
  Products?: Array<IOrdersProducts>;
}

interface INativeOrders {
  Id?: number;
  OrderNumber?: number;
  Date?: string;
  ContactId?: number;
  ContactName?: string;
  PersonId?: number;
  PersonName?: string;
  DealId?: number;
  StageId?: number;
  Amount?: number;
  Discount?: number;
  OwnerId?: number;
  TemplateId?: number;
  IsTemplate?: boolean;
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
  FileName?: string;
  InternalComments?: string;
  Description?: string;
  Key?: string;
  Shared?: boolean;
  EmailSenderTypeId?: number;
  EmailSenderUserId?: number;
  EmailId?: number;
  ExternallyAccepted?: boolean;
  ExternalNotifications?: boolean;
  ExternalSharingDate?: string;
  AgentId?: number;
  Commission?: string;
  CommissionAmount?: number;
  DocumentUrl?: string;
  Approver?: boolean;
  ApprovalStatusId?: number;
  ApprovalLevelId?: number;
  OriginQuoteId?: number;
  CreatorId?: number;
  UpdaterId?: number;
  CreateDate?: string;
  LastUpdateDate?: string;
  LastExternallyOpeningDate?: string;
  Editable?: boolean;
  Deletable?: boolean;
}

interface RealmTypes {
  LocalId?: string;
}

export type IOrders = INativeOrders & INonNativeOrders & RealmTypes;
type TOrdersSelectKeys = keyof INativeOrders;
type TOrdersExpandKeys = keyof INonNativeOrders;

type TOrdersExpandObjectsArray = Array<
  | TOrdersExpandKeys
  | IContactsExpandObject
  | IDealsExpandObject
  | IOrdersStagesExpandObject
  | IUsersExpandObject
  | IDocumentTemplatesExpandObject
  | IOtherPropertiesExpandObject
  | IQuotesExpandObject
  | IDocumentTemplatesPagesExpandObject
  | IOrdersProductsExpandObject
  | IOrdersSectionsExpandObject
>;

export interface IOrdersExpandObject {
  key: 'Order';
  selectArray?: Array<TOrdersSelectKeys>;
  expandArray?: TOrdersExpandObjectsArray;
}

export interface TOrdersSelectExpandArrays {
  selectArray?: Array<TOrdersSelectKeys>;
  expandArray?: TOrdersExpandObjectsArray;
  entity: 'orders';
}
