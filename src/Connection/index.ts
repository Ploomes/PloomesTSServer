import axios from 'axios';
import { ISelf } from '@ploomes/ploomeststypes';
import { IConnection } from './Types/IConnection';


module.exports = (baseUrl: string): IConnection => {
    const connection: IConnection = {
        userKey: '',
        baseUrl,
        login : (email: string, password: string): Promise<string> => {
            return new Promise( (res, rej) => {
                axios.post(
                    connection.baseUrl + 'Self/Login?', { Email: email, Password: password }, {headers:  {'Content-Type': 'application/json'}}
                )
                .then(
                    value => {
                        if(value.data){
                            console.log(value.data)
                            if(value.data?.value?.[0]){
                                const userSelf: ISelf = value.data?.value?.[0] as ISelf
                                connection.userKey = userSelf.UserKey
                            }else{
                                rej(value.data.value)
                            }
                            res(connection.userKey)
                        }
                    }
                )
                .catch(
                    error => {
                        throw new Error(error);
                    }
                )
            })
        },

        get : (url: string):Promise<any> => {
            return new Promise( (res, rej) => {
                connection.request(url, 'GET', {} )
                .then(
                    data => {
                        res(data)
                    }
                )
            })
        },

        post : (url:string, body:any) => {
            return new Promise( (res, rej) => {
                connection.request(url, 'POST', body )
                .then(
                    data => {
                        console.log(data)
                        res(data)
                    }
                )
            })
        },

        patch : (url: string, body: any) => {
            return new Promise( (res, rej) => {
                connection.request(url, 'PATCH', body )
                .then(
                    data => {
                        console.log(data)
                        res(data)
                    }
                )
            })
        },
        
        delete : (url: string) => {
            return new Promise( (res, rej) => {
                connection.request(url, 'DELETE', {} )
                .then(
                    data => {
                        console.log(data)
                        res(data)
                    }
                )
            })
        },

        request : (url: string,  method: 'GET'| 'POST' | 'DELETE' | 'PATCH', body?: Record<string, any> ) => {
            return new Promise( (res, rej) => {
                axios.request(
                    {
                        method, url: connection.baseUrl + url, 
                        headers: {'Content-Type': 'application/json', 'User-Key': connection.userKey}, data: body || {}
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
    return connection
}