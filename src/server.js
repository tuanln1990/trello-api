import express from "express";

const app = express();

const hostname = "http://localhost";

const port = 8017;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on link ${hostname}:${port}`);
});
