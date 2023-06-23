/* eslint-disable max-lines-per-function, max-lines, max-len */

const Account = require("./account.js");

describe("Account", () => {
    beforeEach(() => {
        const mockedDate = new Date("2023-01-10");
        jest.useFakeTimers("modern");
        jest.setSystemTime(mockedDate);
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it("initialises with an empty transaction array", () => {
        const account = new Account();
        expect(account.transactions).toEqual([]);
    });

    it("adds a deposit of 1000", () => {
        const account = new Account();
        account.deposit(1000);
        expect(account.transactions.length).toBe(1);
        expect(account.transactions).toEqual([{ amount: 1000, type: "credit", date: new Date("2023-01-10"), balance: 1000 }]);
    });

    it("adds a withdrawal of 500", () => {
        const account = new Account();
        account.withdraw(500);
        expect(account.transactions.length).toBe(1);
        expect(account.transactions).toEqual([{ amount: 500, type: "debit", date: new Date("2023-01-10"), balance: -500 }]);
    });

    it("adds multiple transactions", () => {
        const account = new Account();
        account.deposit(1000);
        account.deposit(2000);
        account.withdraw(500);
        expect(account.transactions.length).toBe(3);
        expect(account.transactions).toEqual([
            { amount: 1000, type: "credit", date: new Date("2023-01-10"), balance: 1000 },
            { amount: 2000, type: "credit", date: new Date("2023-01-10"), balance: 3000 },
            { amount: 500, type: "debit", date: new Date("2023-01-10"), balance: 2500 },
        ]);
    });

    it("returns an error if amount is 0", () => {
        const account = new Account();
        expect(() => account.deposit(0)).toThrow("Amount must be a number greater than 0");
    });

    it("returns an error if amount is not a number", () => {
        const account = new Account();
        expect(() => account.withdraw("1000")).toThrow("Amount must be a number greater than 0");
    });

    it("calculates the correct balances if transactions not added in order", () => {
        const account = new Account();
        account.deposit(1000);
        account.deposit(2000);
        account.withdraw(500, new Date("2023-03-03"));
        account.deposit(1000, new Date("2023-01-03"));
        expect(account.transactions.length).toBe(4);
        expect(account.transactions).toEqual([
            { amount: 1000, type: "credit", date: new Date("2023-01-03"), balance: 1000 },
            { amount: 1000, type: "credit", date: new Date("2023-01-10"), balance: 2000 },
            { amount: 2000, type: "credit", date: new Date("2023-01-10"), balance: 4000 },
            { amount: 500, type: "debit", date: new Date("2023-03-03"), balance: 3500 },
        ]);
    });
});
