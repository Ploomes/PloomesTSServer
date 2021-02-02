import { ICurrencies, ICurrenciesExpandObject } from '../Currencies/ICurrencies';
import { IDepartments, IDepartmentsExpandObject } from '../Departments/IDepartments';
import { IRoles, IRolesExpandObject } from '../Roles/IRoles';
import { IOtherProperties, IOtherPropertiesExpandObject } from '../OtherProperties/IOtherProperties';
import { IContactsTypes, IContactsTypesExpandObject } from './IContactsTypes';
import { IContactsClass, IContactsClassExpandObject } from './IContactsClass';
import { ICities, ICitiesExpandObject } from '../Cities/ICities';
import { ICitiesCountries, ICitiesCountriesExpandObject } from '../Cities/ICitiesCountries';
import { IContactsCollaboratingUsers, IContactsCollaboratingUsersExpandObject } from './IContactsCollaboratingUsers';
import { IContactsRelationships, IContactsRelationshipsExpandObject } from './IContactsRelationships';
import { IContactsLinesOfBusiness, IContactsLinesOfBusinessExpandObject } from './IContactsLinesOfBusiness';
import { ICitiesCountriesStates, ICitiesCountriesStatesExpandObject } from '../Cities/ICitiesCountriesStates';
import { IContactsPhones, IContactsPhonesExpandObject } from './IContactsPhones';
import { ITagsRelational, ITagsRelationalExpandObject } from '../Tags/ITagsRelational';
import { IContactsOrigins, IContactsOriginsExpandObject } from './IContactsOrigins';
import { IContactsNumberOfEmployees, IContactsNumberOfEmployeesExpandObject } from './IContactsNumberOfEmployees';
import { IUsers, IUsersExpandObject } from '../Users/IUsers';
import { IContactsStatus, IContactsStatusExpandObject } from './IContactsStatus';

interface IContactsNonNative {
  Type?: IContactsTypes;
  Class?: IContactsClass;
  City?: ICities;
  Company?: IContacts;
  Country?: ICitiesCountries;
  CollaboratingUsers?: IContactsCollaboratingUsers;
  Currency?: ICurrencies;
  Department?: IDepartments;
  Relationship?: IContactsRelationships;
  LineOfBusiness?: IContactsLinesOfBusiness;
  Role?: IRoles;
  State?: ICitiesCountriesStates;
  Phones?: Array<IContactsPhones>;
  Tags?: Array<ITagsRelational>;
  OtherProperties?: Array<IOtherProperties>;
  Origin?: IContactsOrigins;
  NumberOfEmployees?: IContactsNumberOfEmployees;
  Owner?: IUsers;
  Status?: IContactsStatus;
}

interface IContatcsRealmKeys {
  debName?: string;
  debLegalName?: string;
  LocalId?: string;
}

interface IContactsNative {
  Id?: number;
  TypeId?: number;
  AvatarUrl?: string;
  Birthday?: string;
  ClassId?: number;
  CNPJ?: string;
  CPF?: string;
  CityId?: number;
  CompanyId?: number;
  CountryId?: number;
  CurrencyId?: number;
  CNAECode?: string;
  CNAEName?: string;
  DepartmentId?: number;
  Email?: string;
  EmailMarketing?: boolean;
  Facebook?: string;
  Name?: string;
  LegalName?: string;
  Register?: string;
  StatusId?: number;
  RelationshipId?: number;
  LineOfBusinessId?: number;
  OriginId?: number;
  NumberOfEmployeesId?: number;
  OwnerId?: number;
  NextAnniversary?: string;
  PreviousAnniversary?: string;
  Note?: string;
  Website?: string;
  RoleId?: number;
  Skype?: string;
  StreetAddress?: string;
  StreetAddressNumber?: string;
  StreetAddressLine2?: string;
  Neighborhood?: string;
  ZipCode?: number;
  StateId?: number;
  Latitude?: number;
  Longitude?: number;
  ImportId?: number;
  CreateImportationId?: number;
  UpdateImportationId?: number;
  FirstTaskId?: number;
  FirstTaskDate?: string;
  LastInteractionRecordId?: number;
  LastDealId?: number;
  LastOrderId?: number;
  TasksOrdination?: number;
  LeadId?: number;
  Editable?: boolean;
  Deletable?: boolean;
  CreatorId?: number;
  UpdaterId?: number;
  CreateDate?: string;
  LastUpdateDate?: string;
  Key?: string;
  LastDocumentId?: number;
}

export type IContacts = IContactsNative & IContactsNonNative & IContatcsRealmKeys;
export type TContactsSelectKeys = keyof IContactsNative | '*';
export type TContactsExpandKeys = keyof IContactsNonNative;

type TContactsExpandObjectsArray = Array<
  | TContactsExpandKeys
  | IContactsTypesExpandObject
  | IContactsClassExpandObject
  | ICitiesExpandObject
  | IContactsExpandObject
  | ICitiesCountriesExpandObject
  | IContactsCollaboratingUsersExpandObject
  | ICurrenciesExpandObject
  | IDepartmentsExpandObject
  | IContactsRelationshipsExpandObject
  | IContactsLinesOfBusinessExpandObject
  | IRolesExpandObject
  | ICitiesCountriesStatesExpandObject
  | IContactsPhonesExpandObject
  | ITagsRelationalExpandObject
  | IOtherPropertiesExpandObject
  | IContactsOriginsExpandObject
  | IContactsNumberOfEmployeesExpandObject
  | IUsersExpandObject
  | IContactsStatusExpandObject
>;

export interface IContactsExpandObject {
  key: 'Contact' | 'Company' | 'Person';
  selectArray?: TContactsSelectKeys[];
  expandArray?: TContactsExpandObjectsArray;
}

export interface TContactsSelectExpandArrays {
  entity: 'contacts';
  selectArray?: Array<TContactsSelectKeys>;
  expandArray?: TContactsExpandObjectsArray;
}
