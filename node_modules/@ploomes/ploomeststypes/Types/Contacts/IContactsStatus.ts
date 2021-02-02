interface Native {
  Id?: number;
  Name?: string;
  Label?: string;
  Icon?: string;
  Color?: string;
  Discarded?: boolean;
}

interface NonNative {}

interface RealmType {
  debName?: string;
}

type IContactsStatusSelectKeys = keyof Native;
type IContactsStatusExpandKeys = keyof NonNative;
export type IContactsStatus = Native & NonNative & RealmType;
export interface IContactsStatusExpandObject {
  key: 'Status';
  selectArray?: IContactsStatusSelectKeys[];
  expandArray?: IContactsStatusExpandKeys[];
}
