import { ICitiesCountries, ICitiesCountriesExpandObject } from './ICitiesCountries';
import { ICitiesCountriesStates, ICitiesCountriesStatesExpandObject } from './ICitiesCountriesStates';

interface Native {
  Id?: number;
  Name?: string;
  CountryId?: number;
  StateId?: number;
  IBGECode?: number;
  LastUpdateDate?: string;
  Editable?: boolean;
}

interface NonNative {
  Country?: ICitiesCountries;
  State?: ICitiesCountriesStates;
}

interface RealmType {
  debName?: string;
}

export type ICities = Native & NonNative & RealmType;
export type ICitiesSelectKeys = keyof Native;
export type ICitiesExpandKeys = keyof NonNative;

type ICitiesExpandObjectsArray = Array<
  ICitiesExpandKeys | ICitiesCountriesExpandObject | ICitiesCountriesStatesExpandObject
>;

export interface ICitiesExpandObject {
  key: 'City';
  selectArray?: ICitiesSelectKeys[];
  expandArray?: ICitiesExpandObjectsArray;
}
