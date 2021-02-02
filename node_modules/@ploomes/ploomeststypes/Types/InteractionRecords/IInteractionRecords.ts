import { IUsers } from '../Users/IUsers';
import { ITasksTypes } from '../Tasks/ITasksTypes';

interface Native {
  Id: number;
  ContactId: number;
  DealId: number;
  Date: string;
  Length: number;
  TypeId: number;
  Content: string;
  Latitude: number;
  Longitude: number;
  VerifiedCheckIn: boolean;
  OriginalTaskId: number;
  TotalVoiceCallId: number;
  CreatorId: number;
  UpdaterId: number;
  LastUpdateDate: string;
  CreateDate: string;
  Editable: boolean;
}
interface NonNative {
  NotifiedUsers: Array<IUsers>;
  Comments: unknown[];
  Type: ITasksTypes;
}

interface RealmType {
  LocalId?: string;
}

type IInteractionRecordsSelectKeys = keyof Native;
type IInteractionRecordsExpandKeys = keyof NonNative;
type IInteractionRecordsExpandObjectArrays = Array<IInteractionRecordsExpandKeys>;

export type IInteractionRecords = Native & NonNative & RealmType;
export interface IInteractionRecordsExpandObject {
  key: 'InteractionRecords' | 'LastInteractionRecords';
  selectArray?: IInteractionRecordsSelectKeys[];
  expandArray?: IInteractionRecordsExpandObjectArrays;
}
