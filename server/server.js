require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes");
const PORT = process.env.NODE_SERVER_PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../build')));

app.use(express.static(path.join(__dirname, "../public")));

app.use(router);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(PORT, () => {
    console.log(`Node server now on port ${PORT}`);
});

