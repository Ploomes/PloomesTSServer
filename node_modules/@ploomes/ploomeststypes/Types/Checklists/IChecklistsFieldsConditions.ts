interface Native {
  Id: number;
  ChecklistFieldId: number;
  FieldKey: string;
  OperationId: boolean;
  StringValue: string;
  BigStringValue: string;
  IntegerValue: number;
  DecimalValue: number;
  DateTimeValue: string;
  BoolValue: boolean;
  ObjectValueName: string;
}

interface NonNative {}

interface RealmType {}

export type IChecklistsFieldsConditions = Native & NonNative & RealmType;
export type IChecklistsFieldsConditionsSelectKeys = keyof Native;
export type IChecklistsFieldsConditionsExpandKeys = keyof NonNative;
export interface IChecklistsFieldsConditionsExpandObject {
  key: 'Conditions';
  selectArray?: IChecklistsFieldsConditionsSelectKeys[];
  expandArray?: IChecklistsFieldsConditionsExpandKeys[];
}
