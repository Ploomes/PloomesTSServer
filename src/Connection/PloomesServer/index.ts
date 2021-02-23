import { ISelf } from '@ploomes/ploomeststypes';
import axios from 'axios';
import { IPloomesServerConstructor } from '../Types/IPloomesServerConstructor';

export class PloomesServer {
  private baseUrl: string = '';
  private userKey: string = '';
  private email: string = '';
  private psw: string = '';
  constructor(options: IPloomesServerConstructor) {
    this.baseUrl = options.baseUrl;
    switch (options.authMethod) {
      case 'validUserKey':
        this.userKey = options.userKey;
        break;

      case 'emailAndPassword':
        this.email = options.email;
        this.psw = options.psw;
        break;

      default:
        break;
    }
  }

  /**
   * login
   * Logs into Ploomes at the provided baseurl with email and psw.
   * returns void
   */
  public login(): Promise<ISelf[]> {
    return new Promise((res, rej) => {
      axios
        .post(
          this.baseUrl + 'Self/Login',
          { Email: this.email, Password: this.psw },
          { headers: { 'Content-Type': 'application/json' } },
        )
        .then(response => {
          if (response.data) {
            const value: ISelf[] = response.data.value;
            if (Array.isArray(value) && value.length) {
              this.userKey = value[0].UserKey;
            }
            res(value);
          }
        });
    });
  }

  /**
   * get
   * Sends a GET request to specified url.
   * returns Promise<any[]>
   */
  public get(url: string): Promise<any[]> {
    return new Promise((res, rej) => {
      this.request(url, 'GET').then(res).catch(rej);
    });
  }

  /**
   * delete
   * Deletes the Id specified at the url.
   * returns Promise<any[]>
   */
  public delete(url: string): Promise<any[]> {
    return new Promise((res, rej) => {
      this.request(url, 'DELETE').then(res).catch(rej);
    });
  }

  /**
   * post
   * Sends a POST request to any Ploomes endpoint with provided body.
   * returns Promise<any[]>
   */
  public post(url: string, body: Record<string, any>): Promise<any[]> {
    return new Promise((res, rej) => {
      this.request(url, 'POST', body).then(res).catch(rej);
    });
  }
  /**
   * patch
   * Sends a PATCH request to any ploomes endpoint with provided body, updating item with the Id provided at the url.
   * returns Promise<any[]>
   */
  public patch(url: string, body: Record<string, any>): Promise<any[]> {
    return new Promise((res, rej) => {
      this.request(url, 'PATCH', body).then(res).catch(rej);
    });
  }

  private request(
    url: string,
    method: 'GET' | 'POST' | 'DELETE' | 'PATCH',
    body?: Record<string, any>,
  ): Promise<any[]> {
    return new Promise((res, rej) => {
      axios
        .request({
          url: this.baseUrl + url,
          method,
          data: body || {},
          headers: {
            'Content-Type': 'application/json',
            'User-Key': this.userKey,
          },
        })
        .then(({ data }) => {
          if (data) {
            res(data.value || data.Image);
          }
        })
        .catch(error => {
          rej(error?.response?.data?.value || 'Invalid Request.');
        });
    });
  }
}
