/* eslint-disable max-lines-per-function, max-lines, max-len */

const Transaction = require("./transaction");

describe("Transaction", () => {
    afterEach(() => {
        jest.useRealTimers();
    });

    it("returns a transaction amount", () => {
        const transaction = new Transaction(1000, "credit");
        expect(transaction.amount).toEqual(1000);
    });

    it("returns a transaction type", () => {
        const transaction = new Transaction(1000, "credit");
        expect(transaction.type).toEqual("credit");
    });

    it("returns the default transaction date", () => {
        const mockedDate = new Date("2023-01-10");
        jest.useFakeTimers("modern");
        jest.setSystemTime(mockedDate);

        const transaction = new Transaction(1000, "credit");
        expect(transaction.date.toLocaleDateString()).toEqual("10/01/2023");
    });

    it("returns a user inputted transaction date", () => {
        const transaction = new Transaction(1000, "credit", new Date("2023-01-13"));
        expect(transaction.date.toLocaleDateString()).toEqual("13/01/2023");
    });

    it("returns an error if amount is not a number", () => {
        expect(() => new Transaction("1000", "credit")).toThrow("Amount must be a number greater than 0");
    });

    it("returns an error if amount is 0", () => {
        expect(() => new Transaction(0, "credit")).toThrow("Amount must be a number greater than 0");
    });

    it("returns an error if amount is negative", () => {
        expect(() => new Transaction(-1000, "debit")).toThrow("Amount must be a number greater than 0");
    });

    it("returns an error if type is not credit or debit", () => {
        expect(() => new Transaction(1000, "debi")).toThrow("Type must be credit or debit");
    });

    it("returns an error if date is not a date object", () => {
        expect(() => new Transaction(1000, "debit", "10-01-2023")).toThrow("Date must be a Date object");
    });
});
