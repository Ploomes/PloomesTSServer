interface Native {
  Id?: number;
  Name?: 'Sem classificação' | '3 estrelas' | '2 estrelas' | '1 estrela';
}

interface NonNative {}

interface RealmType {
  debName?: string;
}

export type IContactsClass = Native & NonNative & RealmType;
export type IContactsClassSelectKeys = keyof Native;
export type IContactsClassExpandKeys = keyof NonNative;
export interface IContactsClassExpandObject {
  key: 'Class';
  selectArray?: IContactsClassSelectKeys[];
}
