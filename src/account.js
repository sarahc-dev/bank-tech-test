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
    this.transactions.push(transaction);
    this.balance = transaction.balance;
  }
}

module.exports = Account;
