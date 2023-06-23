class Statement {
    print(transactions) {
        if (!(transactions instanceof Array)) throw new Error("Transactions should be an array of transactions");

        return this.#printHeader() + this.#printTransactions(transactions).join("\n");
    }

    #printHeader() {
        return "date || credit || debit || balance\n";
    }

    #printTransactions(transactions) {
        return transactions.reverse().map(transaction => {
            return this.#formatTransaction(transaction);
        });
    }

    #formatTransaction(transaction) {
        const date = transaction.date.toLocaleDateString();
        const credit = transaction.type === "credit" ? ` ${transaction.amount.toFixed(2)} ` : " ";
        const debit = transaction.type === "debit" ? ` ${transaction.amount.toFixed(2)} ` : " ";
        const balance = transaction.balance.toFixed(2);
        return `${date} ||${credit}||${debit}|| ${balance}`;
    }
}

module.exports = Statement;
