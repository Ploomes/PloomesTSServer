interface Native {
  Id?: number;
  Name?: string;
}

interface NonNative {}

interface RealmType {
  debName?: string;
}

export type IContactsOrigins = Native & NonNative & RealmType;
export type IContactsOriginsSelectKeys = keyof Native;
export type IContactsOriginsExpandKeys = keyof NonNative;
export interface IContactsOriginsExpandObject {
  key: 'Origin';
  selectArray?: IContactsOriginsSelectKeys[];
  expandArray?: IContactsOriginsExpandKeys[];
}
