const express = require("express");
const uuid5 = require("uuid5");
const moment = require("moment");
const app = express();

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        "token": uuid5(moment().format("MMM Do YYYY, h:mm:ss a"))
    }));
});

app.listen(5000, '0.0.0.0');