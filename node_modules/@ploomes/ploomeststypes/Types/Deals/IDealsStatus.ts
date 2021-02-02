interface Native {
  Id?: number;
  Name?: string;
}

interface NonNative {}

interface RealmType {}

export type IDealsStatus = Native & NonNative & RealmType;
export type IDealsStatusSelectKeys = keyof Native;
export type IDealsStatusExpandKeys = keyof NonNative;
export interface IDealsStatusExpandObject {
  key: 'Status';
  selectArray?: IDealsStatusSelectKeys[];
  expandArray?: IDealsStatusExpandKeys[];
}
