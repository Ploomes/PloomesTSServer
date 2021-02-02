interface Native {
  Id?: number;
  Name?: string;
  Class?: string;
}

interface NonNative {}

interface RealmType {
  Color?: string;
}

type IButtonSelectKeys = keyof Native;
type IButtonExpandKeys = keyof NonNative;
type IButtonExpandObjectArrays = Array<IButtonExpandKeys>;

export type IButton = Native & NonNative & RealmType;
export interface IButtonExpandObject {
  key: 'WinButton' | 'LoseButton';
  selectArray?: IButtonSelectKeys[];
  expandArray?: IButtonExpandObjectArrays;
}
