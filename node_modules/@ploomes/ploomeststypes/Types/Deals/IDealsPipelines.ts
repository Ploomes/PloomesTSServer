import { IOtherProperties, IOtherPropertiesExpandObject } from '../OtherProperties/IOtherProperties';
import { IDealsExpandObject } from './IDeals';
import { IIcons, IIconsExpandObject } from '../Icons/IIcons';
import { IWordsVerbs, IWordsVerbsExpandObject } from '../Words/IWordsVerbs';
import { IButton, IButtonExpandObject } from '../Buttons/IButton';
import { IDealsStages } from './IDealsStages';

interface Native {
  Id?: number;
  Name?: string;
  FormId?: number;
  QuickFormId?: number;
  MustPassAllStages?: boolean;
  ForbiddenStageReturn?: boolean;
  MayCreateQuotes?: boolean;
  MayCreateOrders?: boolean;
  MayCreateDocuments?: boolean;
  MayWinDeals?: boolean;
  MayLoseDeals?: boolean;
  Archived?: boolean;
  NewOrderOnWonDeal?: boolean;
  CreateOrderOnWonDeal?: boolean;
  WinDealOnLastStage?: boolean;
  SingularUnitName?: string;
  PluralUnitName?: string;
  GenderId?: number;
  DefaultQuoteDocumentTemplateId?: number;
  DefaultOrderDocumentTemplateId?: number;
  DefaultDocumentDocumentTemplateId?: number;
  Color?: string;
  IconId?: number;
  EnableTableViewMode?: boolean;
  EnableFunnelViewMode?: boolean;
  NoAllowedPipelines?: boolean;
  WinButtonId?: number;
  LoseButtonId?: number;
  WinVerbId?: number;
  LoseVerbId?: number;
  Ordination?: number;
  ViewMode?: string;
  LastUpdateDate?: string;
}

interface NonNative {
  Icon?: IIcons;
  WinVerb?: IWordsVerbs;
  LoseVerb?: IWordsVerbs;
  WinButton?: IButton;
  LoseButton?: IButton;
  OtherProperties?: Array<IOtherProperties>;
  Stages?: IDealsStages[];
}

interface RealmType {}

export type IDealsPipelines = Native & NonNative & RealmType;
export type IDealsPipelinesSelectKeys = keyof Native;
export type IDealsPipelinesExpandKeys = keyof NonNative;

type IDealsPipelinesExpandArrays = Array<
  IDealsExpandObject | IOtherPropertiesExpandObject | IIconsExpandObject | IWordsVerbsExpandObject | IButtonExpandObject
>;

export interface IDealsPipelinesExpandObject {
  key: 'Pipeline';
  selectArray?: IDealsPipelinesSelectKeys[];
  expandArray?: IDealsPipelinesExpandArrays;
}
