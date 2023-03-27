const Accounts = require("../models/Accounts");
//https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/retrieve/

module.exports = async () => {
  try {
    const results = await Accounts.find();
    return results;
  } catch (error) {
    console.error(error);
    return [];
  }
};
