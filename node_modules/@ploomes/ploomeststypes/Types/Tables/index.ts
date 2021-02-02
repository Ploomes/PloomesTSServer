import { IFilters } from '../Filters';

export interface ITables {
  Id?: number;
  Name?: string;
  EntityId?: number;
  FilterId?: number;
  Filter?: IFilters;
  CreatorId?: number;
  MaximumResultsPerPage?: number;
  Url?: string;
  BelongsToPipeline?: boolean;
  UserPageTable?: boolean;
  ContactPageTable?: boolean;
  Listable?: boolean;
  Editable?: boolean;
  Ordination?: number;
  MailChimpListIntegrationId?: number;
  RealmFilterQuery?: string;
  FilterUrl?: string;
  FilterExpand?: string;
}
