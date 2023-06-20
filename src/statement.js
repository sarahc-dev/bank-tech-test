class Statement {
    print(transactions) {
        if (!(transactions instanceof Array)) throw new Error("Transactions should be an array");

        const sortedTransactions = this.sortTransactionsDesc(transactions);

        return this.printHeader() + this.printTransactions(sortedTransactions);
    }

    printHeader() {
        return "date || credit || debit || balance\n";
    }

    printTransactions(transactions) {
        let statement = "";
        transactions.forEach(transaction => {
            const formattedTransaction = `${transaction.date.toLocaleDateString()} ||${this.formatCurrency(transaction.credit)}||${this.formatCurrency(transaction.debit)}|| ${transaction.balance.toFixed(2)}\n`;

            statement = statement.concat(formattedTransaction);
        });
        return statement;
    }

    formatCurrency(amount) {
        return amount ? ` ${amount.toFixed(2)} ` : " ";
    }

    sortTransactionsDesc(transactions) {
        return transactions.sort((a, b) => {
            if (a.date > b.date) return -1;
            if (a.date < b.date) return 1;
            return 0;
        });
    }
}

module.exports = Statement;
