import { IWords } from '../Words/IWords';

interface Native {
  Id?: number;
  Name?: string;
  WordAdjectiveId?: number;
}

interface NonNative {
  WordAdjective?: IWords;
}

interface RealmType {
  Class: string;
}

type IIconsSelectKeys = keyof Native;
type IIconsExpandKeys = keyof NonNative;
type IIconsExpandObjectArrays = Array<IIconsExpandKeys>;

export type IIcons = Native & NonNative & RealmType;
export interface IIconsExpandObject {
  key: 'Icon';
  selectArray?: IIconsSelectKeys[];
  expandArray?: IIconsExpandObjectArrays;
}
