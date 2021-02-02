import { IFieldsEntities } from './IFIeldsEntities';
import { IFilters } from '../Filters';

export interface IFields {
  Key?: string;
  Id?: number;
  Dynamic?: boolean;
  Name?: string;
  EntityId?: number;
  FilterId?: number;
  Filter?: IFilters;
  Entity?: IFieldsEntities;
  SecondaryEntityId?: number;
  SecondaryEntity?: IFieldsEntities;
  TypeId?: number;
  Type?: IFieldsTypes;
  OptionsTableId?: number;
  OptionsTable?: IFieldsOptionsTable;
  Multiple?: boolean;
  Required?: boolean;
  Unique?: boolean;
  Disabled?: boolean;
  FormHidden?: boolean;
  Hidden?: boolean;
  InternalFormula?: string;
  FieldHideFormula?: string;
  FieldDisableFormula?: string;
  ExternalFormulaUrl?: string;
  ExternalFormulaMethod?: string;
  ExternalFormulaHeaders?: string;
  ExternalFormulaRequestBody?: string;
  DefaultStringValue?: string;
  DefaultBigStringValue?: string;
  DefaultIntegerValue?: number;
  DefaultDecimalValue?: number;
  DefaultDateTimeValue?: string;
  DefaultBoolValue?: boolean;
  GoogleSheetsIntegrationId?: number;
  OriginFieldKey?: string;
  OriginField?: IFields;
  OriginFieldFieldPathId?: number;
  OriginFieldFieldPath?: IFieldsEntitiesPaths;
  ApiUrl?: string;
  PropertyName?: string;
  UpdatePropertyName?: string;
  ValueEditable?: boolean;
  OptionsCreationPermissionPropertyName?: string;
  FormulaVariables?: Array<IFieldsFormulaVariables>;
  ExternalFormulaResponsePaths?: Array<IFieldsExternalFormulaResponsePaths>;
  ExternalFormulaMappedFields?: Array<IFieldsExternalFormulaMappedFields>;
  MustSkipManyToManyTable?: boolean;
  InlineEditable?: boolean;
  IsSensitiveData?: boolean;
  ShowTime?: boolean;
}

export interface IFieldsEntitiesPaths {
  Id?: number;
  EntityId?: number;
  DestinationEntityId?: number;
  Default?: boolean;
  Fields?: Array<IFieldsEntitiesPathsFields>;
}
export interface IFieldsEntitiesPathsFields {
  Id?: number;
  PathId?: number;
  FieldKey?: string;
  Ordination?: number;
}
export interface IFieldsTypes {
  Id?: number;
  Name?: string;
  Icon?: string;
  NativeType?: INativeTypes;
  Listable?: boolean;
  Multipliable?: boolean;
  StandardFormat?: string;
}
export interface IFieldsOptionsTable {
  Id?: number;
  Name?: string;
  Options?: Array<IFieldsOptionsTableOptions>;
}
export interface IFieldsOptionsTableOptions {
  Id?: number;
  TableId?: number;
  Name?: string;
  debName?: string;
  ExternalKey?: string;
  LastUpdateDate?: string;
}
export interface IFieldsEntitiesLastUpdates {
  Id?: number;
  EntityId?: number;
  SystemEntity?: boolean;
  LastUpdateDate?: string;
}

export interface IFieldsFormulaVariables {
  fieldPath?: IFieldsEntitiesPaths;
  Id?: number;
  VariableTypeId?: number;
  FieldKey?: string;
  VariableName?: string;
  VariableFieldKey?: string;
  VariableField?: IFields;
  Field?: IFields;
  DefaultValue?: string;
  Required?: boolean;
  FieldPathId?: number;
  FieldPath?: IFieldsEntitiesPaths;
  IsFieldHideVariable?: boolean;
  IsFieldDisableVariable?: boolean;
  VariableProperty?: string;
}

export interface IFieldsExternalFormulaMappedFields {
  Id?: number;
  FieldKey?: string;
  MappedFieldKey?: string;
  MappedFieldPathId?: number;
  Path?: string;
}
export interface IFieldsExternalFormulaResponsePaths {
  Id?: number;
  FieldKey?: string;
  TypeId?: number;
  Path?: string;
}

export type INativeTypes = 'String' | 'BigString' | 'Integer' | 'Decimal' | 'DateTime' | 'Bool';

export type INativeTypeValues =
  | 'StringValue'
  | 'BigStringValue'
  | 'IntegerValue'
  | 'DecimalValue'
  | 'DateTimeValue'
  | 'BoolValue';

export {IFieldsEntities} from './IFIeldsEntities'
