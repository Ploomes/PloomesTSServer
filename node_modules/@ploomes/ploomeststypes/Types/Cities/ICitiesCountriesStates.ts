import { ICitiesCountries, ICitiesCountriesExpandObject } from './ICitiesCountries';

interface Native {
  Id?: number;
  Name?: string;
  CountryId?: number;
  Short?: string;
}

interface NonNative {
  Country?: ICitiesCountries;
}

interface RealmType {
  debName?: string;
}

export type ICitiesCountriesStates = Native & NonNative & RealmType;
export type ICitiesCountriesStatesSelectKeys = keyof Native;
export type ICitiesCountriesStatesExpandKeys = keyof NonNative;

type ICitiesCountriesStatesExpandObjectsArray = Array<ICitiesCountriesStatesExpandKeys | ICitiesCountriesExpandObject>;

export interface ICitiesCountriesStatesExpandObject {
  key: 'State';
  selectArray?: ICitiesCountriesStatesSelectKeys[];
  expandArray?: ICitiesCountriesStatesExpandObjectsArray;
}
