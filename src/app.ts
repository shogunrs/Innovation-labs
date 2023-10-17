import GetTransactionsService from './services/GetTransactionsService';
import SubmitTransactionDataService from './services/SubmitTransactionDataService';
import ProcessTransactionDataService from './services/ProcessTransactionDataService';

async function main() {
    try {

        // Retrieving the transaction data.
        const getTransactionsService = new GetTransactionsService();
        const data = await getTransactionsService.execute();

        if (!data || !data.id || !data.transactions) {
            throw new Error('Data from GetTransactionsService is malformed or missing required properties.');
        }

        // Processing the transaction data.
        const processTransactionDataService = new ProcessTransactionDataService();
        const result = processTransactionDataService.execute(data);

        // Submitting the result.
        const submitTransactionDataService = new SubmitTransactionDataService();
        const finalResult = await submitTransactionDataService.execute({ id: data.id, result });
        console.log('Final Result:', finalResult);
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

main(); 
