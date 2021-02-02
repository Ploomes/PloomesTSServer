import { IDocumentTemplates } from './IDocumentTemplates';
import { IQuotes } from '../Quotes/IQuotes';

interface Native {
  Id?: number;
  DocumentId?: number;
  DocumentTemplateId?: number;
  QuoteId?: number;
  Quote?: IQuotes;
  OrderId?: number;
  Name?: string;
  BodySourceCode?: string;
  HeaderSourceCode?: string;
  HeaderHeight?: number;
  FooterSourceCode?: string;
  FooterHeight?: number;
  SideMargin?: number;
  TopMargin?: number;
  BottomMargin?: number;
  Ordination?: number;
}

interface NonNative {
  DocumentTemplate?: IDocumentTemplates;
}

interface RealmType {}

type IDocumentTemplatesPagesSelectKeys = keyof Native;
type IDocumentTemplatesPagesExpandKeys = keyof NonNative;
export type IDocumentTemplatesPages = Native & NonNative & RealmType;
export interface IDocumentTemplatesPagesExpandObject {
  key: 'Pages';
  selectArray?: IDocumentTemplatesPagesSelectKeys[];
  expandArray?: IDocumentTemplatesPagesExpandKeys[];
}
