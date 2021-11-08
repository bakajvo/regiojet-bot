import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://brn-ybus-pubapi.sa.cz/restapi',
    headers: {
        'X-Lang': 'cs',
        'X-Currency': 'CZK'
    }
});

export const axiosFetcher = (url: string) => instance.get(url).then(res => res.data);
