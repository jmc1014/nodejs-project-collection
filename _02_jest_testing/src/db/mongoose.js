const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGODB_URL, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// })

const user = process.env.MONGODB_USER;
const pass = process.env.MONGODB_PASS;
const db = process.env.MONGODB_DB; // retrive it in mongoDB. https://cloud.mongodb.com/v2/6413ddc3e031d16134a4dccc#/security/database/users
mongoose.connect(
  `mongodb+srv://${user}:${pass}@maindevcluster.ycczv11.mongodb.net/${db}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);
// console.log("connected to mongoDB");
