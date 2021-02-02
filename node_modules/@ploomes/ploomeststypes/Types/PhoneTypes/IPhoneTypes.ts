interface Native {
  Id?: number;
  Name?: string;
}

interface NonNative {}

interface RealmType {}

type IPhoneTypesSelectKeys = keyof Native;
type IPhoneTypesExpandKeys = keyof NonNative;
export type IPhoneTypes = Native & NonNative & RealmType;
export interface IPhoneTypesExpandObject {
  key: 'Type';
  selectArray?: IPhoneTypesSelectKeys[];
  expandArray?: IPhoneTypesExpandKeys[];
}
