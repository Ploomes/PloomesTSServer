export interface IProductsListsProducts {
  Id?: number;
  ListId?: number;
  ProductId?: number;
}

export interface IProductsLists {
  Id?: number;
  Name?: string;
  debName?: string;
  Color?: string;
  CreatorId?: number;
  CreateDate?: string;
  UpdaterId?: number;
  UpdateDate?: string;
  Editable?: boolean;
}

export interface IProductsParts {
  Id?: number;
  Name?: string;
  debName?: string;
  GroupId?: number;
  ProductId?: number;
  ProductPartId?: number;
  GroupPartId?: number;
  ContactProductId?: number;
  ListPartId?: number;
  Default?: boolean;
  MinimumQuantity?: number;
  MaximumQuantity?: number;
  DefaultQuantity?: number;
  CurrencyId?: number;
  MinimumUnitPrice?: number;
  MaximumUnitPrice?: number;
  DefaultUnitPrice?: number;
  LastUpdateDate?: string;
  Required?: boolean;
}

export {IProducts} from './IProducts'
export {IProductsFamilies} from './IProductsFamilies'
export {IProductsGroups} from './IProductsGroups'
