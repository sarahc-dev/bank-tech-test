/* eslint-disable max-lines-per-function, max-lines, max-len */

const Account = require("./account.js");
const Statement = require("./statement.js");

describe("bank integration", () => {
    it("prints a bank statement with one transaction", () => {
        const account = new Account();
        const statement = new Statement();

        account.deposit(1000, new Date("2023-01-10"));

        const printedStatement = statement.print(account.transactions);

        expect(printedStatement).toEqual("date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00");
    });

    it("prints a bank statement with multiple transactions", () => {
        const account = new Account();
        const statement = new Statement();

        account.deposit(1000, new Date("2023-01-10"));
        account.deposit(2000, new Date("2023-01-13"));
        account.withdraw(500, new Date("2023-01-14"));

        const printedStatement = statement.print(account.transactions);

        expect(printedStatement).toEqual("date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00");
    });

    it("prints a bank statement with multiple transactions not in order", () => {
        const account = new Account();
        const statement = new Statement();

        account.deposit(1000, new Date("2023-01-10"));
        account.deposit(2000, new Date("2023-01-13"));
        account.withdraw(500, new Date("2023-01-14"));
        account.withdraw(1700, new Date("2023-01-11"));
        account.deposit(500, new Date("2023-01-01"));
        account.withdraw(1000, new Date("2023-03-03"));

        const printedStatement = statement.print(account.transactions);

        expect(printedStatement).toEqual("date || credit || debit || balance\n03/03/2023 || || 1000.00 || 300.00\n14/01/2023 || || 500.00 || 1300.00\n13/01/2023 || 2000.00 || || 1800.00\n11/01/2023 || || 1700.00 || -200.00\n10/01/2023 || 1000.00 || || 1500.00\n01/01/2023 || 500.00 || || 500.00");
    });
});
