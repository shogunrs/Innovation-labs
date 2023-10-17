// Supondo que os imports estejam corretos.
import { ITransactionData } from "../interfaces/ITransactionData";
type EmployeeAmountAccumulator = {
    [employeeID: string]: number;
};

class ProcessTransactionDataService {

    execute(data: ITransactionData): string[] {

        // Obtendo o ano anterior
        const lastYear = new Date().getFullYear() - 1;

        const lastYearTransactions = data.transactions.filter(tr => tr.timeStamp.startsWith(lastYear.toString()));

        // Acumulando a soma das transações por empregado.
        const totalAmountPerEmployee = lastYearTransactions.reduce((acc: EmployeeAmountAccumulator, tr) => {
            acc[tr.employee.id] = (acc[tr.employee.id] || 0) + tr.amount;
            return acc;
        }, {});

        let topEarnerId: string | null = null;
        let topEarnerAmount = 0;

        // Identificando o empregado com o maior valor acumulado.
        for (const [employeeID, amount] of Object.entries(totalAmountPerEmployee)) {
            if (Number(amount) > topEarnerAmount) {
                topEarnerAmount = Number(amount);
                topEarnerId = employeeID;
            }
        }

        // Filtrando as transações do empregado de maior ganho que têm o tipo 'alpha'.
        const resultTransactionIds = lastYearTransactions
            .filter(tr => tr.employee.id === topEarnerId && tr.type === 'alpha')
            .map(tr => tr.transactionID);

        return resultTransactionIds;
    }
}

export default ProcessTransactionDataService;
