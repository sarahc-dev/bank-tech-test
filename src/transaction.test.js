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

    it("deposit returns an error if date is not a Date object", () => {
        const transaction = new Transaction();
        const date = "2023-01-10";

        expect(() => transaction.deposit(date, 1000, 0)).toThrow("Date is not an instance of Date object");
    });

    it("returns an error if date is not a Date object", () => {
        const transaction = new Transaction();
        const date = "2023-01-10";

        expect(() => transaction.withdrawal(date, 1000, 1000)).toThrow("Date is not an instance of Date object");
    });

    it("returns an error is amount is not greater than 0", () => {
        const transaction = new Transaction();
        const date = new Date("2023-01-10");

        expect(() => transaction.deposit(date, 0, 1000)).toThrow("Amount must be greater than 0");
    });

    it("returns an error if amount is not a number", () => {
        const transaction = new Transaction();
        const date = new Date("2023-01-10");

        expect(() => transaction.deposit(date, "100", 1000)).toThrow("Amount must be a number");
    });

    it("returns an error if currentBalance is not a number", () => {
        const transaction = new Transaction();
        const date = new Date("2023-01-10");

        expect(() => transaction.deposit(date, 1000, "1000")).toThrow("Current balance must be a number");
    });
});
