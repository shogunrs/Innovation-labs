import { Transaction } from './ITransaction';

export interface ITransactionData {
    id: string;
    transactions: Transaction[];
}