import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
    baseURL: 'https://brn-ybus-pubapi.sa.cz/restapi',
    headers: { 'X-Lang': 'cs' }
});

export const axiosFetcher = (url: string, config?: AxiosRequestConfig<unknown>) => { console.log('Config', config); return instance.get(url, config).then(res => res.data) }
