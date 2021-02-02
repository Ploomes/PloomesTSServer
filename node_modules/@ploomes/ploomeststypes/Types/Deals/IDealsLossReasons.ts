interface Native {
  Id?: number;
  Name?: string;
  PipelineId?: number;
  LastUpdateDate?: string;
}

interface NonNative {}

interface RealmType {
  debName?: string;
}

export type IDealsLossReasons = Native & NonNative & RealmType;
export type IDealsLossReasonsSelectKeys = keyof Native;
export type IDealsLossReasonsExpandKeys = keyof NonNative;
export interface IDealsLossReasonsExpandObject {
  key: 'LossReason';
  selectArray?: IDealsLossReasonsSelectKeys[];
  expandArray?: IDealsLossReasonsExpandKeys[];
}
