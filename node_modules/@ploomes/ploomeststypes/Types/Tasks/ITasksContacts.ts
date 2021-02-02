import { IContacts, TContactsSelectExpandArrays } from '../Contacts/IContacts';

interface Native {
  Id: number;
  TaskId: number;
  ContactId: number;
  Name: string;
  Email: string;
}

interface NonNative {
  Contact: IContacts;
}

interface RealmType {}

type ITasksContactsSelectKeys = keyof Native;
type ITasksContactsExpandKeys = keyof NonNative;
type ITasksContactsExpandObjectArrays = Array<ITasksContactsExpandKeys | TContactsSelectExpandArrays>;

export type ITasksContacts = Native & NonNative & RealmType;
export interface ITasksContactsExpandObject {
  key: 'Contacts';
  selectArray?: ITasksContactsSelectKeys[];
  expandArray?: ITasksContactsExpandObjectArrays;
}
