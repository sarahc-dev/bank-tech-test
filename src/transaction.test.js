const Transaction = require("./transaction");

describe("Transaction", () => {
    it("returns a deposit transaction", () => {
        const transaction = new Transaction();
        const date = new Date("2023-01-10");

        const deposit = transaction.deposit(date, 1000, 0);

        expect(deposit).toEqual({ date: date, credit: 1000, balance: 1000 });
    });

    it("returns a withdrawal transaction", () => {
        const transaction = new Transaction();
        const date = new Date("2023-01-10");

        const withdrawal = transaction.withdrawal(date, 500, 1000);
        expect(withdrawal).toEqual({ date: date, debit: 500, balance: 500 });
    });
});
