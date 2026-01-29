const express = require("express");
const app = express();

app.get("/", (_req, res) => res.status(200).send("moltbot is running ✅"));

const port = process.env.PORT ? Number(process.env.PORT) : 8080;
app.listen(port, "0.0.0.0", () => console.log(`Listening on ${port}`));
