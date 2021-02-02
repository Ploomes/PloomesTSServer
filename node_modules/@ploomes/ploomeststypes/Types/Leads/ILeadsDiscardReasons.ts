interface Native {
  Id?: number;
  Name?: string;
  LastUpdateDate?: string;
}

interface NonNative {}

interface RealmType {}

type ILeadsDiscardReasonsSelectKeys = keyof Native;
type ILeadsDiscardReasonsExpandKeys = keyof NonNative;
export type ILeadsDiscardReasons = Native & NonNative & RealmType;
export interface ILeadsDiscardReasonsExpandObject {
  key: 'DiscardReason';
  selectArray?: ILeadsDiscardReasonsSelectKeys[];
  expandArray?: ILeadsDiscardReasonsExpandKeys[];
}
