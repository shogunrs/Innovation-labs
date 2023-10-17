// Supondo que os imports estejam corretos.
import { ITransactionData } from "../interfaces/ITransactionData";
type EmployeeAmountAccumulator = {
    [employeeID: string]: number;
};

class ProcessTransactionDataService {

    execute(data: ITransactionData): string[] {

        // Getting the previous year
        const lastYear = new Date().getFullYear() - 1;

        const lastYearTransactions = data.transactions.filter(tr => tr.timeStamp.startsWith(lastYear.toString()));

        // Accumulating the sum of transactions per employee.
        const totalAmountPerEmployee = lastYearTransactions.reduce((acc: EmployeeAmountAccumulator, tr) => {
            acc[tr.employee.id] = (acc[tr.employee.id] || 0) + tr.amount;
            return acc;
        }, {});

        let topEarnerId: string | null = null;
        let topEarnerAmount = 0;

        // Identifying the employee with the highest accumulated value
        for (const [employeeID, amount] of Object.entries(totalAmountPerEmployee)) {
            if (Number(amount) > topEarnerAmount) {
                topEarnerAmount = Number(amount);
                topEarnerId = employeeID;
            }
        }

        // Filtering transactions of the highest earning employee that are of type 'alpha'
        const resultTransactionIds = lastYearTransactions
            .filter(tr => tr.employee.id === topEarnerId && tr.type === 'alpha')
            .map(tr => tr.transactionID);

        return resultTransactionIds;
    }
}

export default ProcessTransactionDataService;
