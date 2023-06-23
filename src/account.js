const Transaction = require("./transaction");
class Account {
    constructor() {
        this.transactions = [];
    }

    deposit(amount, date) {
        const deposit = new Transaction(amount, "credit", date);
        this.transactions.push(deposit);
        this.#calculateBalance();
    }

    withdraw(amount, date) {
        const withdrawal = new Transaction(amount, "debit", date);
        this.transactions.push(withdrawal);
        this.#calculateBalance();
    }

    #calculateBalance() {
        this.#sortTransactionsAsc().forEach((transaction, index) => {
            let currentBal = this.transactions[index - 1]?.balance || 0;

            transaction.balance = transaction.type === "credit" ? (currentBal += transaction.amount) : (currentBal -= transaction.amount);
        });
    }

    #sortTransactionsAsc() {
        return this.transactions.sort((a, b) => {
            if (a.date < b.date) return -1;
            if (a.date > b.date) return 1;
            return 0;
        });
    }
}

module.exports = Account;
