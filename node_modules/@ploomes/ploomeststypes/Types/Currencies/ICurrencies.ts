interface Native {
  Id?: number;
  Symbol?: string;
  Code?: string;
  Editable?: boolean;
}

interface NonNative {}

interface RealmType {
  debName?: string;
}

export type ICurrencies = Native & NonNative & RealmType;
export type ICurrenciesSelectKeys = keyof Native;
export type ICurrenciesExpandKeys = keyof NonNative;
export interface ICurrenciesExpandObject {
  key: 'Currency' | 'StartCurrency';
  selectArray?: ICurrenciesSelectKeys[];
  expandArray?: ICurrenciesExpandKeys[];
}
