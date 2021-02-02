import { IOtherProperties, IOtherPropertiesExpandObject } from '../OtherProperties/IOtherProperties';
import { ILeadsStatus, ILeadsStatusExpandObject } from './ILeadsStatus';
import { ILeadsReminders, ILeadsRemindersExpandObject } from './ILeadsReminders';
import { ILeadsDiscardReasons, ILeadsDiscardReasonsExpandObject } from './ILeadsDiscardReasons';
import { ILeadsHistory, ILeadsHistoryExpandObject } from './ILeadsHistory';

interface ILeadsNonNative {
  Status?: ILeadsStatus;
  Reminder?: ILeadsReminders;
  History?: ILeadsHistory[];
  DiscardReason?: ILeadsDiscardReasons;
  OtherProperties?: Array<IOtherProperties>;
}

interface ILeadsNative {
  Id?: number;
  CompanyId?: number;
  PersonId?: number;
  CompanyName?: string;
  CompanyLegalName?: string;
  CompanyRegister?: string;
  PersonName?: string;
  Origin?: string;
  Email?: string;
  OriginId?: number;
  StatusId?: number;
  NextContact?: string;
  NoTime?: boolean;
  ReminderId?: number;
  DiscardReasonId?: number;
  Editable?: boolean;
  Deletable?: boolean;
  Workable?: boolean;
  CreatorId?: number;
  UpdaterId?: number;
  CreateDate?: string;
  LastUpdateDate?: string;
  LastStatusUpdateDate?: string;
  NextContactScheduled?: boolean;
  StatusOrdination?: number;
  NextContactOrdination?: string;
  CreateImportId?: string;
  UpdateImportId?: string;
}

interface RealmType {
  LocalId?: string;
}

export type ILeads = ILeadsNonNative & ILeadsNative & RealmType;
type TLeadsSelectKeys = keyof ILeadsNative;
type TLeadsExpandKeys = keyof ILeadsNonNative;
export interface ILeadsExpandObject {
  key: 'Lead';
  selectArray?: TLeadsSelectKeys[];
  expandArray?: TLeadsExpandKeys[];
}

type ILeadsExpandArraysObjects = Array<
  | TLeadsExpandKeys
  | IOtherPropertiesExpandObject
  | ILeadsStatusExpandObject
  | ILeadsRemindersExpandObject
  | ILeadsDiscardReasonsExpandObject
  | ILeadsHistoryExpandObject
>;

export interface TLeadsSelectExpandArrays {
  selectArray?: Array<TLeadsSelectKeys>;
  expandArray?: ILeadsExpandArraysObjects;
  entity: 'leads';
}
