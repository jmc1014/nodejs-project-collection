const express = require("express");
const router = express.Router();

const CreateService = require("../services/Create");
const RetrieveService = require("../services/Retrieve");
const DeleteService = require("../services/Delete");
const UpdateService = require("../services/Update");

router.post("/create", async (req, res) => {
  const { username, password, info } = req.body;

  const results = await CreateService(username, password, info);

  if (results) {
    res.status(200).send({
      status: results,
      message: "Created!",
    });
  } else {
    res.status(500).send({
      status: results,
      message: "Not Created!",
    });
  }
});

router.post("/retrieve", async (req, res) => {
  const results = await RetrieveService();

  if (results) {
    res.status(200).send(results);
  } else {
    res.status(500).send({
      status: results,
      message: "Not Retrieve!",
    });
  }
});

router.post("/update", async (req, res) => {
  const { _id, data } = req.body;

  const results = await UpdateService(_id, data);

  if (results) {
    res.status(200).send({
      status: results,
      message: "Updated!",
    });
  } else {
    res.status(500).send({
      status: results,
      message: "Not Updated!",
    });
  }
});

router.post("/delete", async (req, res) => {
  const { _id } = req.body;

  const results = await DeleteService(_id);

  if (results) {
    res.status(200).send({
      status: results,
      message: "Updated!",
    });
  } else {
    res.status(500).send({
      status: results,
      message: "Not Updated!",
    });
  }
});

module.exports = router;
