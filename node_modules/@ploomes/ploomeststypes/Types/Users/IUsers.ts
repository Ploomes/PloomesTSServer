interface Native {
  Id?: number;
  Name?: string;
  Email?: string;
  AvatarUrl?: string;
  LastUpdateDate?: string;
  LastLogin?: string;
  LastSeen?: string;
  LastSeenRoute?: string;
  LastSeenPlatform?: string;
  Suspended?: boolean;
}

interface NonNative {}

interface RealmType {
  debName?: string;
}

export type IUsers = Native & NonNative & RealmType;
export type IUsersSelectKeys = keyof Native;
export type IUsersExpandKeys = keyof NonNative;
export interface IUsersExpandObject {
  key: 'User' | 'Owner' | 'Updater' | 'Creator';
  selectArray?: IUsersSelectKeys[];
}
