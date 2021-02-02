import { ITags, ITagsExpandObject } from './ITags';

interface Native {
  Id?: number;
  TagId?: number;
  NoteId?: number;
  InteractionRecordId?: number;
  TaskId?: number;
  ContactId?: number;
  DealId?: number;
  LeadId?: number;
}

interface NonNative {
  Tag?: ITags;
}

interface RealmType {}

export type ITagsRelational = Native & NonNative & RealmType;
export type ITagsRelationalSelectKeys = keyof Native;
export type ITagsRelationalExpandKeys = keyof NonNative;

type ITagsRelationalExpandObjectArray = Array<ITagsRelationalExpandKeys | ITagsExpandObject>;

export interface ITagsRelationalExpandObject {
  key: 'Tags';
  selectArray?: ITagsRelationalSelectKeys[];
  expandArray?: ITagsRelationalExpandObjectArray;
}
