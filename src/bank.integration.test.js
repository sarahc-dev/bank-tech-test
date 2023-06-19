const Account = require("./account.js");
// const Transaction = require("./transaction.js");

describe("bank integration", () => {
  xit("makes a deposit of 1000 on 10-01-2023", () => {
    const account = new Account();
    const balance = account.getBalance();
    const date = new Date("2023-01-10");
    const transaction = new Transaction();
    const deposit = transaction.deposit(date, 1000, balance);

    account.addTransaction(deposit);
    expect(account.transactions()).toEqual([{ date: "10-01-2023", credit: 1000, balance: 1000 }]);
  });
});
