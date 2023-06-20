class Transaction {
    deposit(date, amount, currentBalance) {
        const newBalance = currentBalance + amount;
        return { date: this.formatDate(date), credit: amount, balance: newBalance };
    }

    withdrawal(date, amount, currentBalance) {
        const newBalance = currentBalance - amount;
        return { date: this.formatDate(date), debit: amount, balance: newBalance };
    }

    formatDate(date) {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }
}

module.exports = Transaction;
