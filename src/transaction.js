class Transaction {
    deposit(date, amount, currentBalance) {
        this.handleErrors(date, amount, currentBalance);

        const newBalance = currentBalance + amount;
        return { date: date, credit: amount, balance: newBalance };
    }

    withdrawal(date, amount, currentBalance) {
        this.handleErrors(date, amount, currentBalance);

        const newBalance = currentBalance - amount;
        return { date: date, debit: amount, balance: newBalance };
    }

    handleErrors(date, amount, currentBalance) {
        if (!(date instanceof Date)) throw new Error("Date is not an instance of Date object");
        if (amount <= 0) throw new Error("Amount must be greater than 0");
        if (typeof amount !== "number") throw new Error("Amount must be a number");
        if (typeof currentBalance !== "number") throw new Error("Current balance must be a number");
    }
}

module.exports = Transaction;
