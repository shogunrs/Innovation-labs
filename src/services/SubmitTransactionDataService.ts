import { ApiBase } from "../api/Apibase";
import ISubmitTransactionDataInput from '../interfaces/ISubmitTransactionDataInput';

class SubmitTransactionDataService {
    async execute(data: ISubmitTransactionDataInput) {
        try {
            const response = await ApiBase.post('submit-task', data);
            return response
        } catch (err) {
            throw err;
        }
    }
}

export default SubmitTransactionDataService;

