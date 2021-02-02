interface Native {
  Id?: number;
  Name?: string;
  LastUpdateDate?: string;
}

interface NonNative {}

interface RealmType {
  debName?: string;
}

export type IDepartments = Native & NonNative & RealmType;
export type IDepartmentsSelectKeys = keyof Native;
export type IDepartmentsExpandKeys = keyof NonNative;
export interface IDepartmentsExpandObject {
  key: '';
  selectArray?: IDepartmentsSelectKeys[];
  expandArray?: IDepartmentsExpandKeys[];
}
