class Transaction {
    deposit(date, amount, currentBalance) {
        const newBalance = currentBalance + amount;
        return { date: date, credit: amount, balance: newBalance };
    }

    withdrawal(date, amount, currentBalance) {
        const newBalance = currentBalance - amount;
        return { date: date, debit: amount, balance: newBalance };
    }
}

module.exports = Transaction;
