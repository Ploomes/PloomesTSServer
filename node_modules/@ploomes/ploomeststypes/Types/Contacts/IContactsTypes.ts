type INative = { Id?: 1; Name: 'Empresa' } | { Id?: 2; Name: 'Pessoa' };

interface IContactsTypesRealmProp {
  debName?: string;
}

export type IContactsTypes = INative & IContactsTypesRealmProp;
export type IContactsTypesSelectKeys = keyof INative;
export interface IContactsTypesExpandObject {
  key: 'Type';
  selectArray?: IContactsTypesSelectKeys[];
}
