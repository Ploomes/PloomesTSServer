interface Native {
  Id?: number;
  Name?: string;
}

interface NonNative {}

interface RealmType {
  debName?: string;
}

export type IContactsLinesOfBusiness = Native & NonNative & RealmType;
export type IContactsLinesOfBusinessSelectKeys = keyof Native;
export type IContactsLinesOfBusinessExpandKeys = keyof NonNative;
export interface IContactsLinesOfBusinessExpandObject {
  key: 'LineOfBusiness';
  selectArray?: IContactsLinesOfBusinessSelectKeys[];
  expandArray?: IContactsLinesOfBusinessExpandKeys[];
}
