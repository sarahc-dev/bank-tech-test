const Account = require("./account.js");
const Transaction = require("./transaction.js");

describe("bank integration", () => {
  xit("makes a deposit of 1000 on 10-01-2023", () => {
    const account = new Account();
    const balance = account.getBalance();
    // need to mock date
    const deposit = new Transaction("deposit", 1000, balance);
    account.makeTransaction(deposit);
    expect(account.transactions()).toEqual([{ date: "14-01-2023", credit: 1000.0, balance: 1000.0 }]);
  });
});
