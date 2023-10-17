import GetTransactionsService from './services/GetTransactionsService';
import SubmitTransactionDataService from './services/SubmitTransactionDataService';
import ProcessTransactionDataService from './services/ProcessTransactionDataService';

class TransactionManager {
    private getTransactionsService: GetTransactionsService;
    private processTransactionDataService: ProcessTransactionDataService;
    private submitTransactionDataService: SubmitTransactionDataService;

    constructor() {
        this.getTransactionsService = new GetTransactionsService();
        this.processTransactionDataService = new ProcessTransactionDataService();
        this.submitTransactionDataService = new SubmitTransactionDataService();
    }

    async run() {
        try {
            const data = await this.getTransactionsService.execute();

            if (!data?.id || !data?.transactions) {
                throw new Error('Data is malformed or missing required properties.');
            }

            const result = this.processTransactionDataService.execute(data);
            const finalResult = await this.submitTransactionDataService.execute({ id: data.id, result });

            console.log('Final Result:', finalResult);
        } catch (err) {
            console.error('An error occurred:', err);
        }
    }
}

// Execução
const transactionManager = new TransactionManager();
transactionManager.run();
