const postFindRouter = require("express").Router();
const { Hashs } = require("../mongoose/mongoose");
const path = require('path');

postFindRouter.post("/", async (req, res) => {
  const hash = new Hashs({
    time: new Date(),
    hash: req.body.hash,
  });

  console.log('Saving hash: ' + hash);

  try {
    await hash.save();
    return res.status(200).send(hash);
  } catch (error) {
    console.error(error);
    return res.status(500).send();
  }
});

module.exports = postFindRouter;
