import { ISelf } from '@ploomes/ploomeststypes';
import { IPloomesServerConstructor } from '../Types/IPloomesServerConstructor';
export declare class PloomesServer {
    private baseUrl;
    private userKey;
    private email;
    private psw;
    private timeout;
    constructor(options: IPloomesServerConstructor);
    /**
     * login
     * Logs into Ploomes at the provided baseurl with email and psw.
     * returns void
     */
    login(): Promise<ISelf[]>;
    /**
     * get
     * Sends a GET request to specified url.
     * returns Promise<any[]>
     */
    get(url: string, headers?: Record<string, any>): Promise<any[]>;
    /**
     * delete
     * Deletes the Id specified at the url.
     * returns Promise<any[]>
     */
    delete(url: string, body?: Record<string, any>, headers?: Record<string, any>): Promise<any[]>;
    /**
     * post
     * Sends a POST request to any Ploomes endpoint with provided body.
     * returns Promise<any[]>
     */
    post(url: string, body: Record<string, any>, headers?: Record<string, any>): Promise<any[]>;
    /**
     * patch
     * Sends a PATCH request to any ploomes endpoint with provided body, updating item with the Id provided at the url.
     * returns Promise<any[]>
     */
    patch(url: string, body: Record<string, any>, headers?: Record<string, any>): Promise<any[]>;
    private request;
}
