interface Native {
  Id?: number;
  Name?: string;
  ApiUrl?: string;
  DefaultPropertyName?: string;
  DisplayPropertyName?: string;
  Icon?: string;
  SingularUnitName?: string;
  PluralUnitName?: string;
  Importable?: boolean;
  QuickFormId?: number;
  GenderId?: number;
}

interface NonNative {}

interface RealmType {
  SchemaName?: string;
}

type IFieldsEntitiesSelectKeys = keyof Native;
type IFieldsEntitiesExpandKeys = keyof NonNative;
export type IFieldsEntities = Native & NonNative & RealmType;
export interface IFieldsEntitiesExpandObject {
  key: 'Entity';
  selectArray?: IFieldsEntitiesSelectKeys[];
  expandArray?: IFieldsEntitiesExpandKeys[];
}
