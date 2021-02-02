import { IChecklistsFieldsConditions } from './IChecklistsFieldsConditions';
import { IFields, IFieldsEntitiesPaths } from '../Fields';

interface Native {
  Id: number;
  Name: string;
  ChecklistId: number;
  Required: boolean;
  FieldKey: string;
  FieldPathId: number;
  Ordination: number;
}

interface NonNative {
  Conditions: IChecklistsFieldsConditions[];
  Field: IFields;
  FieldPath: IFieldsEntitiesPaths;
}

interface RealmType {}

export type IChecklistsFields = Native & NonNative & RealmType;
export type IChecklistsFieldsSelectKeys = keyof Native;
export type IChecklistsFieldsExpandKeys = keyof NonNative;
export interface IChecklistsFieldsExpandObject {
  key: 'Fields';
  selectArray?: IChecklistsFieldsSelectKeys[];
  expandArray?: IChecklistsFieldsExpandKeys[];
}
