const Accounts = require("../models/Accounts");
// https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/write-operations/embedded-arrays/

module.exports = async (_id, data) => {
  try {
    const results = await Accounts.updateOne({ _id }, { $set: data });

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
