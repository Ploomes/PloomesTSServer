import { IFields } from '../Fields';

export interface IFilters {
  Id?: number;
  Active?: boolean;
  Name?: string;
  EntityId?: number;
  Url?: string;
  MongoFilterObject?: string;
  Listable?: boolean;
  Fields?: Array<IFiltersFields>;
  RealmFilter?: string;
  FilterExpand?: any;
}

export interface IFiltersFields {
  Id: number;
  FilterId: number;
  LogicalGroupNumber: number;
  FieldKey: string;
  Field: IFields;
  FieldPath: IFiltersFieldsPaths[];
  Values: Array<IFiltersFieldsValues>;
  RelativeDate: boolean;
  OperationId: number;
  SelectorId: number;
}

export interface IFiltersFieldsValues {
  Id: number;
  FilterFieldId: number;
  StringValue: string;
  IntegerValue: number;
  DecimalValue: number;
  DateTimeValue: string;
  MongoFilterObject: string;
  BoolValue: boolean;
}

export interface IFiltersFieldsPaths {
  Id: number;
  FilterFieldId: number;
  FieldKey: string;
  Ordination: number;
  Field: IFields;
}
