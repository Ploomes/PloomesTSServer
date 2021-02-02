interface Native {
  Id?: number;
  Name?: string;
  Icon?: string;
  Color?: string;
  Ordination?: number;
  HistoryStatus?: boolean;
}

interface NonNative {}

interface RealmType {}

type ILeadsStatusSelectKeys = keyof Native;
type ILeadsStatusExpandKeys = keyof NonNative;
export type ILeadsStatus = Native & NonNative & RealmType;
export interface ILeadsStatusExpandObject {
  key: 'Status';
  selectArray?: ILeadsStatusSelectKeys[];
  expandArray?: ILeadsStatusExpandKeys[];
}
