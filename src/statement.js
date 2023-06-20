class Statement {
    print(transactions) {
        if (!(transactions instanceof Array)) throw new Error("Transactions should be an array");
        let statement = this.printHeader();

        this.sortTransactionsDesc(transactions).forEach(transaction => {
            const credit = transaction.credit ? ` ${transaction.credit.toFixed(2)} ` : " ";
            const debit = transaction.debit ? ` ${transaction.debit.toFixed(2)} ` : " ";
            const balance = transaction.balance.toFixed(2);

            const formattedTransaction = `${transaction.date.toLocaleDateString()} ||${credit}||${debit}|| ${balance}\n`;
            statement = statement.concat(formattedTransaction);
        });

        return statement;
    }

    printHeader() {
        return "date || credit || debit || balance\n";
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
