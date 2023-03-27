const Accounts = require("../models/Accounts");
// https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/write-operations/delete/

module.exports = async (_id) => {
  try {
    await Accounts.deleteOne({ _id });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
