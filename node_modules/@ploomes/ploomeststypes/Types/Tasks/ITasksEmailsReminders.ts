interface Native {
  Id?: number;
  Name?: string;
}

interface NonNative {}

interface RealmType {}

type ITasksEmailsRemindersSelectKeys = keyof Native;
type ITasksEmailsRemindersExpandKeys = keyof NonNative;
export type ITasksEmailsReminders = Native & NonNative & RealmType;
export interface ITasksEmailsRemindersExpandObject {
  key: 'EmailReminder';
  selectArray?: ITasksEmailsRemindersSelectKeys[];
  expandArray?: ITasksEmailsRemindersExpandKeys[];
}
