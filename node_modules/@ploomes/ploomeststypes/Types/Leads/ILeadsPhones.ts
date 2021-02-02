import { ICitiesCountries, ICitiesCountriesExpandObject } from '../Cities/ICitiesCountries';
import { IPhoneTypes, IPhoneTypesExpandObject } from '../PhoneTypes/IPhoneTypes';

interface Native {
  Id: number;
  LeadId: number;
  PhoneNumber: string;
  SearchPhoneNumber: number;
  TypeId: number;
  CountryId: number;
}

interface NonNative {
  Country: ICitiesCountries;
  Type: IPhoneTypes;
}

interface RealmType {}

type ILeadsPhonesSelectKeys = keyof Native;
type ILeadsPhonesExpandKeys = keyof NonNative;
type ILeadsPhonesExpandObjectArrays = Array<
  ILeadsPhonesExpandKeys | ICitiesCountriesExpandObject | IPhoneTypesExpandObject
>;

export type ILeadsPhones = Native & NonNative & RealmType;
export interface ILeadsPhonesExpandObject {
  key: 'Phones';
  selectArray?: ILeadsPhonesSelectKeys[];
  expandArray?: ILeadsPhonesExpandObjectArrays;
}
