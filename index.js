const express = require("express");
const connectToMongoDB = require("./connect");
const URL = require("./models/url");

const urlRoute = require("./routes/url")

const app = express();
const port = 8001;

connectToMongoDB("mongodb://127.0.0.1:27017/short_url").then(() => console.log("MongoDB Connected"));

app.use(express.json());
app.use("/url", urlRoute);

app.listen(port, () => console.log(`Server started on port: ${port}`));