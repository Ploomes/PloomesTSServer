import { IUsers, IUsersExpandObject } from '../Users/IUsers';

interface Native {
  Id?: number;
  ContactId?: number;
  UserId?: number;
}

interface NonNative {
  User?: IUsers;
}

interface RealmType {}

export type IContactsCollaboratingUsers = Native & NonNative & RealmType;
export type IContactsCollaboratingUsersSelectKeys = keyof Native;
export type IContactsCollaboratingUsersExpandKeys = keyof NonNative;

type IContactsCollaboratingUsersExpandArrays = Array<IContactsCollaboratingUsersExpandKeys | IUsersExpandObject>;

export interface IContactsCollaboratingUsersExpandObject {
  key: 'CollaboratingUsers';
  selectArray?: IContactsCollaboratingUsersSelectKeys[];
  expandArray?: IContactsCollaboratingUsersExpandArrays;
}
