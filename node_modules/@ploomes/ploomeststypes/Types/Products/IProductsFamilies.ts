import { IOtherProperties, IOtherPropertiesExpandObject } from '../OtherProperties/IOtherProperties';

interface Native {
  Id?: number;
  Name?: string;
  debName?: string;
  Editable?: boolean;
  Deletable?: boolean;
}

interface NonNative {
  OtherProperties?: Array<IOtherProperties>;
}

interface RealmType {}

type IProductsFamiliesSelectKeys = keyof Native;
type IProductsFamiliesExpandKeys = keyof NonNative;
type IProductsFamiliesExpandObjectArrays = Array<IProductsFamiliesExpandKeys | IOtherPropertiesExpandObject>;

export type IProductsFamilies = Native & NonNative & RealmType;
export interface IProductsFamiliesExpandObject {
  key: 'Family';
  selectArray?: IProductsFamiliesSelectKeys[];
  expandArray?: IProductsFamiliesExpandObjectArrays;
}
