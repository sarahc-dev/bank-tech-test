const Account = require("./account.js");

describe("Account", () => {
    it("initialises with a balance of 0", () => {
        const account = new Account();
        expect(account.getBalance()).toEqual(0);
    });

    it("initialises with an empty transaction array", () => {
        const account = new Account();
        expect(account.getTransactions()).toEqual([]);
    });

    it("adds a transaction for a deposit of 1000 on 14-01-2023", () => {
        const account = new Account();

        const mockTransaction = {
            deposit: () => {
                return { date: "14-01-2023", credit: 1000, balance: 1000 };
            },
        };

        account.addTransaction(mockTransaction.deposit());
        expect(account.getTransactions()).toEqual([{ date: "14-01-2023", credit: 1000, balance: 1000 }]);
        expect(account.getBalance()).toEqual(1000);
    });

    it("adds a transaction for a withdrawal of 500 on 10-01-2023", () => {
        const account = new Account();

        const mockTransaction = {
            withdrawal: () => {
                return { date: "10-01-2023", debit: 500, balance: 300 };
            },
        };

        account.addTransaction(mockTransaction.withdrawal());
        expect(account.getTransactions()).toEqual([{ date: "10-01-2023", debit: 500, balance: 300 }]);
        expect(account.getBalance()).toEqual(300);
    });

    it("returns an error if transaction does not have correct values", () => {
        const account = new Account();

        expect(() => account.addTransaction(500)).toThrow("Transaction should be an object");
    });
});
