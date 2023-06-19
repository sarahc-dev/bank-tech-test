const Account = require("./account.js");

describe("Account", () => {
  it("initialises with a balance of 0", () => {
    const account = new Account();
    expect(account.getBalance()).toEqual(0);
  });
});
