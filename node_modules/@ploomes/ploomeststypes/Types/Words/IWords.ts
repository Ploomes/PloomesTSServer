interface Native {
  Id?: number;
  MaleValue?: string;
  FemaleValue?: string;
  PluralMaleValue?: string;
  PluralFemaleValue?: string;
}

interface NonNative {}

interface RealmType {}

type IWordsSelectKeys = keyof Native;
type IWordsExpandKeys = keyof NonNative;
type IWordsExpandObjectArrays = Array<IWordsExpandKeys>;

export type IWords = Native & NonNative & RealmType;
export interface IWordsExpandObject {
  key: 'WordAdjective';
  selectArray?: IWordsSelectKeys[];
  expandArray?: IWordsExpandObjectArrays;
}
