import { IChecklistsFields } from './IChecklistsFields';

interface Native {
  Id: number;
  Name: string;
  DealStageId: number;
  DealFilterId: number;
  CreatorId: number;
  Ordination: number;
}

interface NonNative {
  Fields: IChecklistsFields[];
}

interface RealmType {}

export type IChecklists = Native & NonNative & RealmType;
export type IChecklistsSelectKeys = keyof Native;
export type IChecklistsExpandKeys = keyof NonNative;
export interface IChecklistsExpandObject {
  key: 'Checklists';
  selectArray?: IChecklistsSelectKeys[];
  expandArray?: IChecklistsExpandKeys[];
}
