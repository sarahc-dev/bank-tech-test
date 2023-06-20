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
});
