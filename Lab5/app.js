const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routerMessages = require("./routes/api/v1/index")
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  app.set("view engine", "pug");
  res.render("index", { title: "Lab 5 of Nick" });
})

app.use("/api/v1/messages", routerMessages)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})