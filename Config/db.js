const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/mernapp";
const connection = mongoose.connect(MONGO_URL);

module.exports = {
  connection,
};
