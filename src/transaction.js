class Transaction {
    constructor(amount, type, date) {
        if (typeof amount !== "number" || amount <= 0) throw new Error("Amount must be a number greater than 0");
        if (type !== "credit" && type !== "debit") throw new Error("Type must be credit or debit");
        if (date && !(date instanceof Date)) throw new Error("Date must be a JS Date object");

        this.amount = amount;
        this.type = type;
        this.date = date || new Date();
    }
}

module.exports = Transaction;
