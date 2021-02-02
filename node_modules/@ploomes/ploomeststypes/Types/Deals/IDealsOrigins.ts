interface Native {
  Id?: number;
  Name?: string;
  LastUpdateDate?: string;
}

interface NonNative {}

interface RealmType {}

type IDealsOriginsSelectKeys = keyof Native;
type IDealsOriginsExpandKeys = keyof NonNative;
export type IDealsOrigins = Native & NonNative & RealmType;
export interface IDealsOriginsExpandObject {
  key: 'Origin';
  selectArray?: IDealsOriginsSelectKeys[];
  expandArray?: IDealsOriginsExpandKeys[];
}
