export declare type IPloomesServerConstructor = IPloomesServerEmailAndPasswordAuth | IPloomesServerUserKeyAuth;
interface IPloomesServerEmailAndPasswordAuth {
    baseUrl: string;
    timeout?: number;
    authMethod: 'emailAndPassword';
    email: string;
    psw: string;
}
interface IPloomesServerUserKeyAuth {
    baseUrl: string;
    timeout?: number;
    authMethod: 'validUserKey';
    userKey: string;
}
export {};
