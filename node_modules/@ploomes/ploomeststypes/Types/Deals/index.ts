//TODO
// ADD CONTACTPRODUCT SCHEMA

export interface IDealsAllowedTemplates {
  Id?: number;
  PipelineId?: number;
  DocumentTemplateId?: number;
  EntityId?: number;
}

export interface IAmountSumByCurrencySymbol {
  CurrencySymbol: string;
  CurrencyId: number;
  Amount: number;
  Count: number;
}

export {IDeals} from './IDeals'
export {IDealsLossReasons} from './IDealsLossReasons'
export {IDealsOrigins} from './IDealsOrigins'
export {IDealsPipelines} from './IDealsPipelines'
export {IDealsStages} from './IDealsStages'
export {IDealsStatus} from './IDealsStatus'
