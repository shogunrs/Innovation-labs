import { ApiBase } from "../api/Apibase";

class GetTransactionsService {

    async execute() {

        return await ApiBase.get('get-task');
    }
}
export default GetTransactionsService;














