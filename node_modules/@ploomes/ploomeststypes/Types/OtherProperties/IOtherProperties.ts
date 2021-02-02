interface Native {
  Id?: number;
  FieldId?: number;
  FieldKey?: string;
  AccountId?: number;
  ContactId?: number;
  ContactProductId?: number;
  DealId?: number;
  QuoteId?: number;
  QuoteSectionId?: number;
  QuoteProductId?: number;
  QuoteProductPartId?: number;
  OrderId?: number;
  OrderSectionId?: number;
  OrderProductId?: number;
  OrderProductPartId?: number;
  LeadId?: number;
  DocumentId?: number;
  ProductId?: number;
  FamilyId?: number;
  GroupId?: number;
  ListId?: number;
  InteractionRecordId?: number;
  StringValue?: string;
  BigStringValue?: string;
  IntegerValue?: number;
  DecimalValue?: number;
  DateTimeValue?: string;
  BoolValue?: boolean;
  ObjectValueId?: number;
  ObjectValueName?: string;
  UserValueId?: number;
  UserValueName?: string;
  UserValueAvatarUrl?: string;
  ProductValueId?: number;
  ProductValueName?: string;
  AttachmentValueId?: number;
  AttachmentValueName?: string;
  ContactValueId?: number;
  ContactValueName?: string;
  ContactValueTypeId?: number;
  ContactValueRegister?: string;
}

interface NonNative {}

interface RealmType {}

export interface IOtherPropertiesCRUD {
  FieldKey: string;
  StringValue?: string;
  BigStringValue?: string;
  IntegerValue?: number;
  DecimalValue?: number;
  DateTimeValue?: string;
  BoolValue?: boolean;
}

export type IOtherProperties = Native & NonNative & RealmType;
export type IOtherPropertiesSelectKeys = keyof Native;
export type IOtherPropertiesExpandKeys = keyof NonNative;
export interface IOtherPropertiesExpandObject {
  key: 'OtherProperties';
  selectArray?: IOtherPropertiesSelectKeys[];
  expandArray?: IOtherPropertiesExpandKeys[];
}
