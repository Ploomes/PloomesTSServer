import { IWords, IWordsExpandObject } from './IWords';

interface Native {
  Id?: number;
  Name?: string;
  WordAdjectiveId?: number;
}

interface NonNative {
  WordAdjective?: IWords;
}

interface RealmType {}

type IWordsVerbsSelectKeys = keyof Native;
type IWordsVerbsExpandKeys = keyof NonNative;
type IWordsVerbsExpandObjectArrays = Array<IWordsVerbsExpandKeys | IWordsExpandObject>;

export type IWordsVerbs = Native & NonNative & RealmType;
export interface IWordsVerbsExpandObject {
  key: 'WinVerb' | 'LoseVerb';
  selectArray?: IWordsVerbsSelectKeys[];
  expandArray?: IWordsVerbsExpandObjectArrays;
}
