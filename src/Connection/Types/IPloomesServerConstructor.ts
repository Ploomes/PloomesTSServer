export type IPloomesServerConstructor =
  | IPloomesServerEmailAndPasswordAuth
  | IPloomesServerUserKeyAuth;

interface IPloomesServerEmailAndPasswordAuth {
  baseUrl: string;
  authMethod: 'emailAndPassword';
  email: string;
  psw: string;
}

interface IPloomesServerUserKeyAuth {
  baseUrl: string;
  authMethod: 'validUserKey';
  userKey: string;
}
