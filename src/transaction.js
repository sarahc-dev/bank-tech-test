class Transaction {
    constructor(amount, type, date = new Date()) {
        if (typeof amount !== "number" || amount <= 0) throw new Error("Amount must be a number greater than 0");
        if (type !== "credit" && type !== "debit") throw new Error("Type must be credit or debit");
        if (!(date instanceof Date)) throw new Error("Date must be a Date object");

        this.amount = amount;
        this.type = type;
        this.date = date;
    }
}

module.exports = Transaction;
