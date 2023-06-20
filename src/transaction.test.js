const Transaction = require("./transaction");

describe("Transaction", () => {
    it("returns a deposit transaction", () => {
        const transaction = new Transaction();
        const date = new Date("2023-01-10");

        const deposit = transaction.deposit(date, 1000, 0);

        expect(deposit).toEqual({ date: "10-01-2023", credit: 1000, balance: 1000 });
    });
});
