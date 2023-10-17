import { ApiBase } from "../api/Apibase";
import ISubmitTransactionDataInput from '../interfaces/ISubmitTransactionDataInput';

class SubmitTransactionDataService {
    private apiBase: typeof ApiBase;

    constructor(apiBase: typeof ApiBase = ApiBase) {
        this.apiBase = apiBase;
    }

    async execute(data: ISubmitTransactionDataInput) {
        try {
            return await this.apiBase.post('submit-task', data);
        } catch (err) {
            throw err;
        }
    }
}

export default SubmitTransactionDataService;
