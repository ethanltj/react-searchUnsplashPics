import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8dkU0BknyW8V5tv1pwMW2BnN9AKAVUN_nBxSGnpS73Y' 
    }
});