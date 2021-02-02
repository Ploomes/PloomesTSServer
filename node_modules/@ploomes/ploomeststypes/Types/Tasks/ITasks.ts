import { IContacts, IContactsExpandObject } from '../Contacts/IContacts';
import { IDeals, IDealsExpandObject } from '../Deals/IDeals';
import { IUsers, IUsersExpandObject } from '../Users/IUsers';
import { ITasksTypes, ITasksTypesExpandObject } from './ITasksTypes';
import { ITasksRepeatIntervalUnits, ITasksRepeatIntervalUnitsExpandObject } from './ITasksRepeatIntervalUnits';
import { ITasksEmailsReminders, ITasksEmailsRemindersExpandObject } from './ITasksEmailsReminders';
import { ITasksContacts } from './ITasksContacts';
import { ITagsRelational, ITagsRelationalExpandObject } from '../Tags/ITagsRelational';

interface INonNativeTasks {
  Contact?: IContacts;
  Contacts?: ITasksContacts[];
  Deal?: IDeals;
  Creator?: IUsers;
  Updater?: IUsers;
  Finisher?: IUsers;
  Type?: ITasksTypes;
  RepeatIntervalUnit?: ITasksRepeatIntervalUnits;
  EmailReminder?: ITasksEmailsReminders;
  Users?: IUsers[];
  Tags?: ITagsRelational[];
  OriginTask?: ITasks;
}

interface INativeTasks {
  Id?: number;
  Title?: string;
  Description?: string;
  TypeId?: number;
  ContactId?: number;
  ContactName?: string;
  DealId?: number;
  RepeatIntervalLength?: number;
  RepeatIntervalUnitId?: number;
  EmailReminderId?: number;
  DateTime?: string;
  EndTime?: string;
  NoTime?: string;
  Length?: number;
  Finished?: boolean;
  Editable?: boolean;
  Finishable?: boolean;
  CreatesGoogleCalendarEvent?: boolean;
  Address?: string;
  Latitude?: number;
  Longitude?: number;
  InteractionRecordId?: number;
  OriginTaskId?: number;
  CreatorId?: number;
  UpdaterId?: number;
  FinisherId?: number;
  FinishDate?: string;
  CreateDate?: string;
  LastUpdateDate?: string;
}

interface RealmKeys {
  LocalId?: number;
}

export type ITasks = INonNativeTasks & INativeTasks & RealmKeys;
export type TTasksSelectKeys = keyof INativeTasks;
export type TTasksExpandKeys = keyof INonNativeTasks;
export interface ITasksExpandObject {
  key: 'FirstTask' | 'OriginTask';
  selectArray?: TTasksSelectKeys[];
  expandArray?: TTasksExpandKeys[];
}

type TTasksExpandObjectArrays = Array<
  | TTasksExpandKeys
  | IContactsExpandObject
  | IDealsExpandObject
  | IUsersExpandObject
  | ITasksExpandObject
  | ITasksTypesExpandObject
  | ITasksEmailsRemindersExpandObject
  | ITasksRepeatIntervalUnitsExpandObject
  | ITagsRelationalExpandObject
>;

export interface TTasksSelectExpandArrays {
  selectArray?: Array<TTasksSelectKeys>;
  expandArray?: TTasksExpandObjectArrays;
  entity: 'tasks';
}
