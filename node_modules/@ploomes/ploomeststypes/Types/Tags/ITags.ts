interface Native {
  Id?: number;
  Name?: string;
  Color?: string;
  EntityId?: number;
}

interface NonNative {}

interface RealmType {
  debName?: string;
}

type ITagsSelectKeys = keyof Native;
type ITagsExpandKeys = keyof NonNative;
type ITagsExpandObjectArrays = Array<ITagsExpandKeys>;

export type ITags = Native & NonNative & RealmType;
export interface ITagsExpandObject {
  key: 'Tag';
  selectArray?: ITagsSelectKeys[];
  expandArray?: ITagsExpandObjectArrays;
}
