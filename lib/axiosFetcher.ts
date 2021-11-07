import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://brn-ybus-pubapi.sa.cz/restapi',
    headers: {'X-Lang': 'cs'}
});

export const axiosFetcher = url => instance.get(url).then(res => res.data)
