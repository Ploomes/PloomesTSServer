import { IFieldsEntities } from '../Fields/IFIeldsEntities';
import { IFields } from '../Fields';

export interface IForms {
  Id?: number;
  Name?: string;
  Fields?: Array<IFormsFields>;
  Sections?: Array<IFormsSections>;
  Key?: string;
  EntityId?: number;
  Entity?: IFieldsEntities;
  FilterForm?: boolean;
  Editable?: boolean;
  TemplateId?: number;
  LastUpdateDate?: string;
}

export interface IFormsFields {
  Id?: number;
  FormId?: number;
  Form?: IForms;
  Field?: IFields;
  SectionId?: number;
  SectionCode?: number;
  SectionName?: string;
  SectionProductGroupIds?: string;
  SectionProductFamilyIds?: string;
  SectionProductListIds?: string;
  SectionOnlyContactProducts?: boolean;
  SectionAlwaysOpen?: boolean;
  ProductPartCode?: number;
  ProductPartName?: string;
  ProductPartGroupIds?: string;
  GroupNumber?: number;
  FieldKey?: string;
  Ordination?: number;
  QuickFormId?: number;
  QuickForm?: IForms;
}
export interface IFormsSections {
  Id?: number;
  FormId?: number;
  Name?: string;
  Ordination?: number;
  Hidden?: boolean;
}
