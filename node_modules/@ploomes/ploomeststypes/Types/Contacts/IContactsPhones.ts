import { ICitiesCountries, ICitiesCountriesExpandObject } from '../Cities/ICitiesCountries';
import { IPhoneTypes, IPhoneTypesExpandObject } from '../PhoneTypes/IPhoneTypes';

interface Native {
  Id?: number;
  ContactId?: number;
  PhoneNumber?: string;
  SearchPhoneNumber?: number;
  TypeId?: number;
  CountryId?: number;
}

interface NonNative {
  Type?: IPhoneTypes;
  Country?: ICitiesCountries;
}

interface RealmType {
  RealmSearchPhoneNumber?: string;
}

export type IContactsPhones = Native & NonNative & RealmType;
export type IContactsPhonesSelectKeys = keyof Native;
export type IContactsPhonesExpandKeys = keyof NonNative;

type IContactsPhonesExpandArrays = Array<
  IContactsPhonesExpandKeys | IPhoneTypesExpandObject | ICitiesCountriesExpandObject
>;

export interface IContactsPhonesExpandObject {
  key: 'Phones';
  selectArray?: IContactsPhonesSelectKeys[];
  expandArray?: IContactsPhonesExpandArrays;
}
