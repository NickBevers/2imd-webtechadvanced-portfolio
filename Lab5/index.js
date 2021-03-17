const express = require('express');
const app = express();
const port = 3000;
const routerMessages = require("./routes/index.js")

app.get("/", (req, res) => {
  app.set("view engine", "pug");
  res.render("index", { title: "Lab 5 of NIck" });
})

app.use("/api/v1/messages", routerMessages)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})