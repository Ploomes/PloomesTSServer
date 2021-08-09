import { ISelf } from '@ploomes/ploomeststypes';
import axios from 'axios';
import { IPloomesServerConstructor } from '../Types/IPloomesServerConstructor';

export class PloomesServer {
  private baseUrl: string = '';
  private userKey: string = '';
  private email: string = '';
  private psw: string = '';
  private timeout: number = 0;
  constructor(options: IPloomesServerConstructor) {
    this.baseUrl = options.baseUrl;
    if (options.timeout) {
      this.timeout = options.timeout;
    }
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
          console.log('response', response);

          if (response.data) {
            const value: ISelf[] = response.data.value;
            if (Array.isArray(value) && value.length) {
              this.userKey = value[0].UserKey;
            }
            res(value);
          }
        })
        .catch(e => rej(e.response));
    });
  }

  /**
   * get
   * Sends a GET request to specified url.
   * returns Promise<any[]>
   */
  public get(url: string, headers: Record<string, any> = {}): Promise<any[]> {
    return new Promise((res, rej) => {
      this.request(url, 'GET', undefined, headers).then(res).catch(rej);
    });
  }

  /**
   * delete
   * Deletes the Id specified at the url.
   * returns Promise<any[]>
   */
  public delete(
    url: string,
    body?: Record<string, any>,
    headers: Record<string, any> = {},
  ): Promise<any[]> {
    return new Promise((res, rej) => {
      this.request(url, 'DELETE', body || undefined, headers)
        .then(res)
        .catch(rej);
    });
  }

  /**
   * post
   * Sends a POST request to any Ploomes endpoint with provided body.
   * returns Promise<any[]>
   */
  public post(
    url: string,
    body: Record<string, any>,
    headers: Record<string, any> = {},
  ): Promise<any[]> {
    return new Promise((res, rej) => {
      this.request(url, 'POST', body, headers).then(res).catch(rej);
    });
  }
  /**
   * patch
   * Sends a PATCH request to any ploomes endpoint with provided body, updating item with the Id provided at the url.
   * returns Promise<any[]>
   */
  public patch(
    url: string,
    body: Record<string, any>,
    headers: Record<string, any> = {},
  ): Promise<any[]> {
    return new Promise((res, rej) => {
      this.request(url, 'PATCH', body, headers).then(res).catch(rej);
    });
  }

  private request(
    url: string,
    method: 'GET' | 'POST' | 'DELETE' | 'PATCH',
    body?: Record<string, any>,
    headers: Record<string, any> = {},
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
            ...headers,
          },
        })
        .then(({ data }) => {
          if (data) {
            if (this.timeout) {
              setTimeout(() => {
                res(data.value || data.Image || data.Values);
              }, this.timeout);
            } else {
              res(data.value || data.Image || data.Values);
            }
          } else {
            if (this.timeout) {
              setTimeout(() => {
                res([]);
              }, this.timeout);
            } else {
              res([]);
            }
          }
        })
        .catch(error => {
          if (this.timeout) {
            setTimeout(() => {
              rej(error?.response?.data?.value || 'Invalid Request.');
            }, this.timeout);
          } else {
            rej(error?.response?.data?.value || 'Invalid Request.');
          }
        });
    });
  }
}
