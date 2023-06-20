const Account = require("./account.js");
const Transaction = require("./transaction.js");

describe("bank integration", () => {
    it("makes a deposit of 1000 on 10-01-2023", () => {
        const account = new Account();
        const balance = account.getBalance();
        const date = new Date("2023-01-10");
        const transaction = new Transaction();
        const deposit = transaction.deposit(date, 1000, balance);

        account.addTransaction(deposit);
        expect(account.getTransactions()).toEqual([{ date: "10-01-2023", credit: 1000, balance: 1000 }]);
    });

    it("makes multiple deposit transactions", () => {
        const account = new Account();
        const transaction = new Transaction();

        const balance = account.getBalance();
        const date = new Date("2023-01-10");
        const deposit = transaction.deposit(date, 1000, balance);
        account.addTransaction(deposit);

        const newBalance = account.getBalance();
        const secondDate = new Date("2023-01-13");
        const secondDeposit = transaction.deposit(secondDate, 2000, newBalance);
        account.addTransaction(secondDeposit);

        expect(account.getTransactions().length).toBe(2);
        expect(account.getBalance()).toBe(3000);
        expect(account.getTransactions()).toEqual([
            { date: "10-01-2023", credit: 1000, balance: 1000 },
            { date: "13-01-2023", credit: 2000, balance: 3000 },
        ]);
    });

    it("makes a withdrawal of 500 on 14-01-2023", () => {
        const account = new Account();
        const transaction = new Transaction();
        const balance = 1000;
        const date = new Date("2023-01-14");
        const withdrawal = transaction.withdrawal(date, 500, balance);
        account.addTransaction(withdrawal);

        expect(account.getBalance()).toBe(500);
        expect(account.getTransactions()).toEqual([{ date: "14-01-2023", debit: 500, balance: 500 }]);
    });

    it("makes multiple deposit and withdrawal transactions", () => {
        const account = new Account();
        const transaction = new Transaction();

        const balance1 = account.getBalance();
        const date1 = new Date("2023-01-10");
        const deposit1 = transaction.deposit(date1, 1000, balance1);
        account.addTransaction(deposit1);

        const balance2 = account.getBalance();
        const date2 = new Date("2023-01-13");
        const deposit2 = transaction.deposit(date2, 2000, balance2);
        account.addTransaction(deposit2);

        const balance3 = account.getBalance();
        const date3 = new Date("2023-01-14");
        const withdrawal1 = transaction.withdrawal(date3, 500, balance3);
        account.addTransaction(withdrawal1);

        expect(account.getBalance()).toBe(2500);
        expect(account.getTransactions().length).toBe(3);
        expect(account.getTransactions()).toEqual([
            { date: "10-01-2023", credit: 1000, balance: 1000 },
            { date: "13-01-2023", credit: 2000, balance: 3000 },
            { date: "14-01-2023", debit: 500, balance: 2500 },
        ]);
    });
});
