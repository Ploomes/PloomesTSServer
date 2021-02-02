interface Native {
  Id?: number;
  Name?: string;
  Datepart?: string;
  DatepartLength?: number;
}

interface NonNative {}

interface RealmType {}

type ITasksRepeatIntervalUnitsSelectKeys = keyof Native;
type ITasksRepeatIntervalUnitsExpandKeys = keyof NonNative;
export type ITasksRepeatIntervalUnits = Native & NonNative & RealmType;
export interface ITasksRepeatIntervalUnitsExpandObject {
  key: 'RepeatIntervalUnit';
  selectArray?: ITasksRepeatIntervalUnitsSelectKeys[];
  expandArray?: ITasksRepeatIntervalUnitsExpandKeys[];
}
