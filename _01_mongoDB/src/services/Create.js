const Accounts = require("../models/Accounts");
// https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/write-operations/insert/

module.exports = async (username, password, info) => {
  try {
    await Accounts.insertMany([{ username, password, info }]);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
