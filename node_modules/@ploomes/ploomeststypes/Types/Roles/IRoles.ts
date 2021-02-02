interface Native {
  Id?: number;
  Name?: string;
  LastUpdateDate?: string;
}

interface NonNative {}

interface RealmType {
  debName?: string;
}

export type IRoles = Native & NonNative & RealmType;
export type IRolesSelectKeys = keyof Native;
export type IRolesExpandKeys = keyof NonNative;
export interface IRolesExpandObject {
  key: 'Role';
  selectArray?: IRolesSelectKeys[];
  expandArray?: IRolesExpandKeys[];
}
