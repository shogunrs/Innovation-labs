import { ApiBase } from "../api/Apibase";

class GetTransactionsService {
    private apiBase: typeof ApiBase;

    constructor(apiBase: typeof ApiBase = ApiBase) {
        this.apiBase = apiBase;
    }

    async execute() {
        try {
            return await this.apiBase.get('get-task');
        } catch (err) {
            throw err;
        }
    }
}

export default GetTransactionsService;
