interface Native {
  Id?: number;
  Name?: string;
}

interface NonNative {}

interface RealmType {}

type IQuotesApprovalStatusSelectKeys = keyof Native;
type IQuotesApprovalStatusExpandKeys = keyof NonNative;
export type IQuotesApprovalStatus = Native & NonNative & RealmType;
export interface IQuotesApprovalStatusExpandObject {
  key: 'ApprovalStatus';
  selectArray?: IQuotesApprovalStatusSelectKeys[];
  expandArray?: IQuotesApprovalStatusExpandKeys[];
}
