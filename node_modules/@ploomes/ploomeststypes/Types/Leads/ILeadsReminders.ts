interface Native {
  Id?: number;
  Name?: string;
}

interface NonNative {}

interface RealmType {}

type ILeadsRemindersSelectKeys = keyof Native;
type ILeadsRemindersExpandKeys = keyof NonNative;
export type ILeadsReminders = Native & NonNative & RealmType;
export interface ILeadsRemindersExpandObject {
  key: 'Reminders';
  selectArray?: ILeadsRemindersSelectKeys[];
  expandArray?: ILeadsRemindersExpandKeys[];
}
