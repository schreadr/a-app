const getSearchRouter = require("express").Router();
const path = require('path');
const { Hashs } = require("../mongoose/mongoose");

getSearchRouter.get("/", async (req, res) => {
    try {
        const result = await Hashs.findOne({ hash : req.query.hash }).sort({ "time": -1 });
        let response = {};

        if(result){
            response.time = result.time;
            response.hash = result.hash;
        }

        res.header({ 'Content-Type': 'application/json' });
        res.status(200).json(response);
    } catch (error) {
        console.log("Error: " + error);
        return res.status(500).send("öpis isch nid gange");
    }
});

module.exports = getSearchRouter;