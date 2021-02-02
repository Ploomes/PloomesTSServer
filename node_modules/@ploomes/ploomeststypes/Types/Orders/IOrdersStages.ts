interface Native {
  Id: number;
  Name: string;
  Icon: string;
  Ordination: number;
}

interface NonNative {}

interface RealmType {}

type IOrdersStagesSelectKeys = keyof Native;
type IOrdersStagesExpandKeys = keyof NonNative;
export type IOrdersStages = Native & NonNative & RealmType;
export interface IOrdersStagesExpandObject {
  key: 'Stage';
  selectArray?: IOrdersStagesSelectKeys[];
  expandArray?: IOrdersStagesExpandKeys[];
}
