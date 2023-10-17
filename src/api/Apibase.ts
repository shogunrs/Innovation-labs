import axios from 'axios';
import env from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, '../../.env');
env.config({ path: envPath });

const BASE_URL = process.env.API_BASE_URL;

export class ApiBase {
    private static async request(method: string, url: string, data?: any) {
        try {
            const response = await axios({
                method: method,
                url: `${BASE_URL}${url}`,
                data: data,
            });
            return response.data;
        } catch (err) {
            throw err;
        }
    }

    static async get(url: string) {
        return this.request('get', url);
    }

    static async post(url: string, data: any) {
        return this.request('post', url, data);
    }

}
