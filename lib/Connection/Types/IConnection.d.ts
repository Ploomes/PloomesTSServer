export interface IConnection {
    userKey: string;
    baseUrl: string;
    login: (email: string, password: string) => Promise<string>;
    get: (url: string) => Promise<any>;
    post: (url: string, body: any) => Promise<any>;
    patch: (url: string, body: any) => Promise<any>;
    delete: (url: string) => Promise<any>;
    request: (url: string, method: "GET" | "POST" | "DELETE" | "PATCH", body: Record<string, any>) => Promise<any>;
}
