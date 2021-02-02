interface Native {
  Id?: number;
  Name?: string;
  PipelineId?: number;
  LastPipelineStage?: boolean;
  Ordination?: number;
  TriggerId?: number;
}

interface NonNative {}

interface RealmType {}

export type IDealsStages = Native & NonNative & RealmType;
export type IDealsStagesSelectKeys = keyof Native;
export type IDealsStagesExpandKeys = keyof NonNative;
export interface IDealsStagesExpandObject {
  key: 'Stage' | 'Stages';
  selectArray?: IDealsStagesSelectKeys[];
  expandArray?: IDealsStagesExpandKeys[];
}
