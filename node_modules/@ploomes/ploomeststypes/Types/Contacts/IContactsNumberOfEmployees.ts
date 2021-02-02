interface Native {
  Id?: number;
  Name?: string;
  LastUpdateDate?: string;
}

interface NonNative {}

interface RealmType {
  debName?: string;
}

export type IContactsNumberOfEmployees = Native & NonNative & RealmType;
export type IContactsNumberOfEmployeesSelectKeys = keyof Native;
export type IContactsNumberOfEmployeesExpandKeys = keyof NonNative;
export interface IContactsNumberOfEmployeesExpandObject {
  key: 'NumberOfEmployees';
  selectArray?: IContactsNumberOfEmployeesSelectKeys[];
  expandArray?: IContactsNumberOfEmployeesExpandKeys[];
}
