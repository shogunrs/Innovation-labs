export interface Transaction {
    employee: {
        id: string;
        name: string;
    };
    transactionID: string;
    timeStamp: string;
    amount: number;
    type: string;
    location: {
        name: string;
    };
}