import axios from 'axios';
import { ISelf } from '@ploomes/ploomeststypes';

export class Connection {
    
    static userKey: string;
    static baseUrl: string;
    
    constructor(baseUrl: string) {
        Connection.baseUrl = baseUrl
    }

    login = (email: string, password: string): Promise<string> => {
        return new Promise( (res, rej) => {
            axios.post(
                Connection.baseUrl + 'Self/Login?', { Email: email, Password: password }, {headers:  {'Content-Type': 'application/json'}}
            )
            .then(
                value => {
                    if(value.data){
                        console.log(value.data)
                        if(value.data?.value?.[0]){
                            const userSelf: ISelf = value.data?.value?.[0] as ISelf
                            Connection.userKey = userSelf.UserKey
                        }else{
                            rej(value.data.value)
                        }
                        res(Connection.userKey)
                    }
                }
            )
            .catch(
                error => {
                    throw new Error(error);
                }
            )
        })
    }

    get = (url) => {
        return new Promise( (res, rej) => {
            this.request(url, 'GET' )
            .then(
                data => {
                    console.log(data)
                    res(data)
                }
            )
        })
    }

    post = (url, body) => {
        return new Promise( (res, rej) => {
            this.request(url, 'POST', body )
            .then(
                data => {
                    console.log(data)
                    res(data)
                }
            )
        })
    }

    patch = (url, body) => {
        return new Promise( (res, rej) => {
            this.request(url, 'PATCH', body )
            .then(
                data => {
                    console.log(data)
                    res(data)
                }
            )
        })
    }

    delete = (url) => {
        return new Promise( (res, rej) => {
            this.request(url, 'DELETE' )
            .then(
                data => {
                    console.log(data)
                    res(data)
                }
            )
        })
    }

    request = (url: string,  method: 'GET'| 'POST' | 'DELETE' | 'PATCH', body: Record<string, any> = {}) => {
        return new Promise( (res, rej) => {
            axios.request(
                {
                    method, url: Connection.baseUrl + url, 
                    headers: {'Content-Type': 'application/json', 'User-Key': Connection.userKey}, data: body
                }
            )
            .then(
                response => {
                    if(response.data){
                        res(response.data.value)
                    }
                }
            )
            .catch( error => {throw new Error(error)})
        })
    }
}