const Statement = require("./statement");

describe("Statement", () => {
    it("prints a statement with one transaction", () => {
        const statement = new Statement();

        const mockAccount = {
            getTransactions: () => {
                return [{ date: new Date("2023-01-10"), credit: 1000, balance: 1000 }];
            },
        };

        const printedStatement = statement.print(mockAccount.getTransactions());

        expect(printedStatement).toEqual("date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00\n");
    });

    it("prints a statement with multiple transactions in descending order", () => {
        const statement = new Statement();

        const mockAccount = {
            getTransactions: () => {
                return [
                    { date: new Date("2023-01-10"), credit: 1000, balance: 1000 },
                    { date: new Date("2023-01-13"), credit: 2000, balance: 3000 },
                    { date: new Date("2023-01-14"), debit: 500, balance: 2500 },
                ];
            },
        };

        const printedStatement = statement.print(mockAccount.getTransactions());
        expect(printedStatement).toEqual("date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00\n");
    });

    it("correctly sorts transactions", () => {
        const statement = new Statement();

        const mockTransactions = [
            { date: new Date("2023-01-10 10:15:03"), credit: 1000, balance: 1000 },
            { date: new Date("2023-01-10 10:15:13"), credit: 2000, balance: 3000 },
            { date: new Date("2023-01-09"), debit: 500, balance: 0 },
            { date: new Date("2023-01-09"), credit: 500, balance: 500 },
        ];

        expect(statement.sortTransactionsDesc(mockTransactions)).toEqual([
            { date: new Date("2023-01-10 10:15:13"), credit: 2000, balance: 3000 },
            { date: new Date("2023-01-10 10:15:03"), credit: 1000, balance: 1000 },
            { date: new Date("2023-01-09"), debit: 500, balance: 0 },
            { date: new Date("2023-01-09"), credit: 500, balance: 500 },
        ]);
    });
});
