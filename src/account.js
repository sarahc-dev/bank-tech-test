class Account {
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }

    getBalance() {
        return this.balance;
    }

    getTransactions() {
        return this.transactions;
    }

    addTransaction(transaction) {
        if (typeof transaction !== "object") {
            throw new Error("Transaction should be an object");
        }

        this.transactions.push(transaction);
        this.balance = transaction.balance;
    }
}

module.exports = Account;
