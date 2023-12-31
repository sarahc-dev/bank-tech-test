/* eslint-disable max-lines-per-function, max-lines, max-len */

const Statement = require("./statement");

describe("Statement", () => {
    it("prints a statement with no transactions", () => {
        const mockAccount = {
            transactions: [],
        };

        const statement = new Statement(mockAccount);

        const printedStatement = statement.print();
        expect(printedStatement).toEqual("date || credit || debit || balance\n");
    });

    it("prints a statement with one transaction", () => {
        const mockAccount = {
            transactions: [{ amount: 1000, type: "credit", date: new Date("2023-01-10"), balance: 1000 }],
        };

        const statement = new Statement(mockAccount);
        const printedStatement = statement.print();
        expect(printedStatement).toEqual("date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00");
    });

    it("prints a statement with two transactions in descending order", () => {
        const mockAccount = {
            transactions: [
                { amount: 1000, type: "credit", date: new Date("2023-01-10"), balance: 1000 },
                { amount: 2000, type: "credit", date: new Date("2023-01-13"), balance: 3000 },
            ],
        };

        const statement = new Statement(mockAccount);
        const printedStatement = statement.print();
        expect(printedStatement).toEqual("date || credit || debit || balance\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00");
    });

    it("prints a statement with multiple transactions in descending order", () => {
        const mockAccount = {
            transactions: [
                { amount: 1000, type: "credit", date: new Date("2023-01-10"), balance: 1000 },
                { amount: 2000, type: "credit", date: new Date("2023-01-13"), balance: 3000 },
                { amount: 500, type: "debit", date: new Date("2023-01-14"), balance: 2500 },
            ],
        };

        const statement = new Statement(mockAccount);
        const printedStatement = statement.print();
        expect(printedStatement).toEqual("date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00");
    });

    it("returns an error if transactions is not an array", () => {
        const mockAccount = {
            transactions: "credit 500",
        };

        const statement = new Statement(mockAccount);
        expect(() => statement.print()).toThrow("Transactions should be an array");
    });
});
