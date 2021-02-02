interface Native {
  Id?: number;
  Name?: string;
  Short1?: string;
  Short2?: string;
  PhoneMask?: string;
}

interface NonNative {}

interface RealmType {
  debName?: string;
}

export type ICitiesCountries = Native & NonNative & RealmType;
export type ICitiesCountriesSelectKeys = keyof Native;
export type ICitiesCountriesExpandKeys = keyof NonNative;
export interface ICitiesCountriesExpandObject {
  key: 'Country';
  selectArray?: ICitiesCountriesSelectKeys[];
  expandArray?: ICitiesCountriesExpandKeys[];
}
