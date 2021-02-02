import { IUsers } from '../Users/IUsers';

interface Native {
  Id: number;
  TaskId: number;
  UserId: number;
}

interface NonNative {
  Users: IUsers[];
}

interface RealmType {}

type ITasksUsersSelectKeys = keyof Native;
type ITasksUsersExpandKeys = keyof NonNative;
type ITasksUsersExpandObjectArrays = Array<ITasksUsersExpandKeys | ITasksUsersExpandObjectArrays>;

export type ITasksUsers = Native & NonNative & RealmType;
export interface ITasksUsersExpandObject {
  key: 'Users';
  selectArray?: ITasksUsersSelectKeys[];
  expandArray?: ITasksUsersExpandObjectArrays;
}
