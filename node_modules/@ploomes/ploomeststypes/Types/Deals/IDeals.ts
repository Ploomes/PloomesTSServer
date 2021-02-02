import { IContacts, IContactsExpandObject } from '../Contacts/IContacts';
import { IUsers, IUsersExpandObject } from '../Users/IUsers';
import { ICurrencies, ICurrenciesExpandObject } from '../Currencies/ICurrencies';
import { ITagsRelational, ITagsRelationalExpandObject } from '../Tags/ITagsRelational';
import { IDealsPipelines, IDealsPipelinesExpandObject } from './IDealsPipelines';
import { IDealsStages, IDealsStagesExpandObject } from './IDealsStages';
import { IDealsLossReasons, IDealsLossReasonsExpandObject } from './IDealsLossReasons';
import { IDealsStatus, IDealsStatusExpandObject } from './IDealsStatus';
import { ITasks, ITasksExpandObject } from '../Tasks/ITasks';
import { IQuotes, IQuotesExpandObject } from '../Quotes/IQuotes';
import { IDealsOrigins, IDealsOriginsExpandObject } from './IDealsOrigins';
import { ILeads, ILeadsExpandObject } from '../Leads/ILeads';
import { IDocuments } from '../Documents/IDocuments';
import { IOtherProperties, IOtherPropertiesExpandObject } from '../OtherProperties/IOtherProperties';
import { IOrders } from '../Orders/IOrders';

interface IDealsNonNative {
  Contact?: IContacts;
  Person?: IContacts;
  Pipeline?: IDealsPipelines;
  Stage?: IDealsStages;
  LossReason?: IDealsLossReasons;
  Status?: IDealsStatus;
  FirstTask?: ITasks;
  LastQuote?: IQuotes;
  Origin?: IDealsOrigins;
  Owner?: IUsers;
  Creator?: IUsers;
  Updater?: IUsers;
  StartCurrency?: ICurrencies;
  LastOrder?: IOrders;
  Lead?: ILeads;
  OriginDeal?: IDeals;
  LastDocument?: IDocuments;
  Tags?: ITagsRelational[];
  OtherProperties?: IOtherProperties[];
  Currency?: ICurrencies;
}

interface IDealsNative {
  Id?: number;
  Title?: string;
  ContactId?: number;
  ContactName?: string;
  PersonId?: number;
  PersonName?: string;
  PipelineId?: number;
  StageId?: number;
  StatusId?: number;
  FirstTaskId?: number;
  ContactProductId?: number;
  LastQuoteId?: number;
  LossReasonId?: number;
  FirstTaskDate?: number;
  HasScheduledTasks?: boolean;
  TasksOrdination?: number;
  OriginId?: number;
  OwnerId?: number;
  StartDate?: string;
  FinishDate?: string;
  CurrencyId?: number;
  Amount?: number;
  StartCurrencyId?: number;
  StartAmount?: number;
  Read?: boolean;
  LastInteractionRecordId?: number;
  LastOrderId?: number;
  DaysInStage?: number;
  HoursInStage?: number;
  Length?: number;
  CreateImportId?: number;
  UpdateImportId?: number;
  LeadId?: number;
  OriginDealId?: number;
  ReevId?: number;
  Editable?: boolean;
  Deletable?: boolean;
  CreatorId?: number;
  UpdaterId?: number;
  CreateDate?: string;
  LastUpdateDate?: string;
  LastDocumentId?: number;
  DealNumber?: number;
}

interface RealmTypes {
  LocalId?: string;
}

export type IDeals = IDealsNative & IDealsNonNative & RealmTypes;
type TDealsSelectKeys = keyof IDealsNative;
type TDealsExpandKeys = keyof IDealsNonNative;

export type TDealsExpandObjectArray = Array<
  | TDealsExpandKeys
  | IContactsExpandObject
  | IDealsPipelinesExpandObject
  | IDealsStagesExpandObject
  | IDealsLossReasonsExpandObject
  | IDealsStatusExpandObject
  | ITasksExpandObject
  | IQuotesExpandObject
  | IDealsOriginsExpandObject
  | IUsersExpandObject
  | ICurrenciesExpandObject
  | ILeadsExpandObject
  | IDealsExpandObject
  | ITagsRelationalExpandObject
  | IOtherPropertiesExpandObject
>;

export interface TDealsSelectExpandArrays {
  entity: 'deals';
  selectArray?: TDealsSelectKeys[];
  expandArray?: TDealsExpandObjectArray;
}

export interface IDealsExpandObject {
  key: 'Deal' | 'OriginDeal';
  selectArray?: TDealsSelectKeys[];
  expandArray?: TDealsExpandKeys[];
}

export type IDealsGetTypes = 'sort' | 'firstLoad' | 'refresh' | 'onEndReached' | 'filter' | 'search';
export type IDealsFlatlistObject = { data: IDeals[]; hashToUpdateFlatlist: number; lastGetLength: number };
