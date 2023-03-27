const fs = require("fs");
// const cheerio = require("cheerio");
const mongoose = require("mongoose");
// const Listing = require("./model/Listing");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function connectToMongoDB() {
  const pass = "wnBBo8lhpbSYY4AK"; // retrive it in mongoDB. https://cloud.mongodb.com/v2/6413ddc3e031d16134a4dccc#/security/database/users
  await mongoose.connect(
    `mongodb+srv://tempUser01:${pass}@maindevcluster.ycczv11.mongodb.net/?retryWrites=true&w=majority`
  );
  console.log("connected to mongoDB");
}

// Routes
const accountsRoutes = require("./routes/Accounts");
app.use("/accounts", accountsRoutes);

const port = 3001;

app.listen(port, async () => {
  connectToMongoDB();
  console.log("Listening on port: ", port);
});
