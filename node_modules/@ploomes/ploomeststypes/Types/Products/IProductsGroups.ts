import { IOtherProperties, IOtherPropertiesExpandObject } from '../OtherProperties/IOtherProperties';

interface Native {
  Id?: number;
  Name?: string;
  debName?: string;
  FamilyId?: number;
  FixedPrice?: number;
  CreateImportId?: number;
  UpdateImportId?: number;
  Editable?: boolean;
  Deletable?: boolean;
  Default?: boolean;
  LastUpdateDate?: string;
}

interface NonNative {
  OtherProperties?: Array<IOtherProperties>;
}

interface RealmType {}

type IProductsGroupsSelectKeys = keyof Native;
type IProductsGroupsExpandKeys = keyof NonNative;
type IProductsGroupsExpandObjectArrays = Array<IProductsGroupsExpandKeys | IOtherPropertiesExpandObject>;

export type IProductsGroups = Native & NonNative & RealmType;
export interface IProductsGroupsExpandObject {
  key: 'Group';
  selectArray?: IProductsGroupsSelectKeys[];
  expandArray?: IProductsGroupsExpandObjectArrays;
}
