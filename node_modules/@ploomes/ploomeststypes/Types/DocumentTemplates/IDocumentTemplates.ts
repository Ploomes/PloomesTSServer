import { IFieldsEntities } from '../Fields/IFIeldsEntities';

interface Native {
  Id?: number;
  Name?: string;
  EntityId?: number;
  SecondaryEntityId?: number;
  FormId?: number;
  Default?: boolean;
  HeaderSourceCode?: string;
  HeaderHeight?: number;
  FooterSourceCode?: string;
  FooterHeight?: number;
  BodySourceCode?: string;
  TopMargin?: number;
  BottomMargin?: number;
  SideMargin?: number;
  CoverSourceCode?: string;
  HasCoverPage?: boolean;
  HasPaging?: boolean;
  NewFormat?: boolean;
  InstallmentsAmountFieldKey?: string;
  InstallmentsRequired?: boolean;
  Editable?: boolean;
  LastUpdateDate?: string;
  FileNameFormula?: string;
}

interface NonNative {
  Entity?: IFieldsEntities;
  SecondaryEntity?: IFieldsEntities;
}

interface RealmType {}

type IDocumentTemplatesSelectKeys = keyof Native;
type IDocumentTemplatesExpandKeys = keyof NonNative;
export type IDocumentTemplates = Native & NonNative & RealmType;
export interface IDocumentTemplatesExpandObject {
  key: 'Template';
  selectArray?: IDocumentTemplatesSelectKeys[];
  expandArray?: IDocumentTemplatesExpandKeys[];
}
export interface IDocumentTemplatesExpandArrays {
  entity: 'documentTemplates';
  selectArray?: IDocumentTemplatesSelectKeys[];
  expandArray?: IDocumentTemplatesExpandKeys[];
}
