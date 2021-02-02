interface Native {
  Id?: number;
  Name?: string;
  Icon?: string;
  Color?: string;
}

interface NonNative {}

interface RealmType {}

type ITasksTypesSelectKeys = keyof Native;
type ITasksTypesExpandKeys = keyof NonNative;
export type ITasksTypes = Native & NonNative & RealmType;
export interface ITasksTypesExpandObject {
  key: 'Type';
  selectArray?: ITasksTypesSelectKeys[];
  expandArray?: ITasksTypesExpandKeys[];
}
