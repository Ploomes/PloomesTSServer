import { ILeadsStatus, ILeadsStatusExpandObject } from './ILeadsStatus';

interface Native {
  Id?: number;
  LeadId?: number;
  StatusId?: number;
  Comments?: string;
  NextContact?: string;
  NoTime?: boolean;
  CreatorId?: number;
  CreateDate?: string;
  Editable?: boolean;
  ReminderId?: number;
}

interface NonNative {
  Status?: ILeadsStatus;
}

interface RealmType {
  LocalId?: string;
}

type ILeadsHistorySelectKeys = keyof Native;
type ILeadsHistoryExpandKeys = keyof NonNative;
type ILeadsHistoryExpandObjectArrays = Array<ILeadsHistoryExpandKeys | ILeadsStatusExpandObject>;

export type ILeadsHistory = Native & NonNative & RealmType;
export interface ILeadsHistoryExpandObject {
  key: 'History';
  selectArray?: ILeadsHistorySelectKeys[];
  expandArray?: ILeadsHistoryExpandObjectArrays;
}
