import { IOtherProperties, IOtherPropertiesExpandObject } from '../OtherProperties/IOtherProperties';
import { IProductsGroups, IProductsGroupsExpandObject } from './IProductsGroups';
import { IProductsFamilies } from './IProductsFamilies';

interface Native {
  Id?: number;
  GroupId?: number;
  FamilyId?: number;
  Name?: string;
  Code?: string;
  MeasurementUnit?: string;
  ImageUrl?: string;
  CurrencyId?: number;
  UnitPrice?: number;
  CreateImportId?: number;
  UpdateImportId?: number;
  Editable?: boolean;
  Deletable?: boolean;
  Suspended?: boolean;
  CreatorId?: number;
  UpdaterId?: number;
  CreateDate?: string;
  LastUpdateDate?: string;
}

interface NonNative {
  Group?: IProductsGroups;
  Family?: IProductsFamilies;
  OtherProperties?: Array<IOtherProperties>;
}

interface RealmType {
  debName?: string;
}

type IProductsSelectKeys = keyof Native;
type IProductsExpandKeys = keyof NonNative;
type IProductsExpandObjectArrays = Array<
  IProductsExpandKeys | IProductsGroupsExpandObject | IOtherPropertiesExpandObject
>;

export type IProducts = Native & NonNative & RealmType;
export interface IProductsExpandObject {
  key: 'Product';
  selectArray?: IProductsSelectKeys[];
  expandArray?: IProductsExpandObjectArrays;
}
