interface Native {
  Id?: number;
  Name?: 'Cliente' | 'Parceiro' | 'Revendedor' | 'Fornecedor';
}

interface NonNative {}

interface RealmType {
  debName?: string;
}

export type IContactsRelationships = Native & NonNative & RealmType;
export type IContactsRelationshipsSelectKeys = keyof Native;
export type IContactsRelationshipsExpandKeys = keyof NonNative;
export interface IContactsRelationshipsExpandObject {
  key: 'Relationship';
  selectArray?: IContactsRelationshipsSelectKeys[];
  expandArray?: IContactsRelationshipsExpandKeys[];
}
