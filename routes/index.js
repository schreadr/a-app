const getRouter = require("express").Router();
const path = require('path');
const { Location } = require("../mongoose/mongoose");
const fs = require('fs');

const index = fs.readFileSync(
  path.join(process.cwd(), '/public/view/html/index.html'),
  { encoding: 'utf-8' }
);

getRouter.get("/", async (req, res) => {
  try {
    try {
      res.header({ 'Content-Type': 'text/html' });
      res.status(200).send(index);
    } catch (error) {
      console.log("Error: " + error);
      return res.status(500).send("eppis isch nid gange");
    }
  } catch (error) {
    console.log("Error: " + error);
    return res.status(500).send("eppis isch nid gange");
  }
});

module.exports = getRouter;