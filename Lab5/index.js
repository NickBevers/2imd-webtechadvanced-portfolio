const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  app.set("view engine", "pug");
  res.render("index", { title: "Lab 5 of NIck" });
})

app.get("/api/v1/messages", (req, res) => {
  res.json({
    message: "GETTING messages"
  })
  //Geef messages terug (met mongoDB)
  //(zonder mongoDb) Response kan zijn : { “message”: “GETTING messages” }
  //geef ook effectief messages terug uit je databank (of statisch)

}) 

app.get("/api/v1/messages/:id", (req, res) => {
  let id = req.params.id;
  res.json({
    message: `GETTING message with ID ${id}`
  })
  //(met mongoDb) Geeft message met specifiek id terug
  //(zonder mongoDb) Response kan zijn : { “message”: “GETTING message with ID id” }

}) 

app.post("/api/v1/messages/:user", (req, res) => {
  let user = req.params.user;
  res.json({
    message: `POSTING a new message for user ${user}`
  })
  //(met mongoDb) Kan een JSON-object ontvangen en bewaren en geeft het nieuwe document terug
  //Body: { message: { “user”: “Pikachu”, “text”: “nodejs isn’t hard, or is it?” } }
  //(zonder mongoDb) Response kan zijn: {“message”: “POSTING a new message for user Pikachu”}
  //Zorg dat je de naam dynamisch kan invullen en in het antwoord teruggeeft
}) 

app.put("/api/v1/messages/:id", (req, res) => {
  let id = req.params.id;
  res.json({
    message: `UPDATING a message with id ${id}`
  })
  //(met mongoDb) Kan een JSON-object ontvangen en een specifiek bericht updaten en geeft die nieuwe bericht terug
  //(zonder MongoDb) Response kan zijn: {“message”: “UPDATING a message with id id”}
})

app.delete("/api/v1/messages/:id", (req, res) => {
  res.send("/api/v1/messages")
  //(met mongoDb) Kan een message met id verwijderen en geeft een response terug {“status”: “success”, “message”: “The message was removed”}
  //(zonder mongoDb) Response kan zij: {“message”: “DELETING a message with id id”}
}) 

app.get("/api/v1/messages?user=username", (req, res) => {
  res.send("/api/v1/messages")
  //(met mongoDb) Kan berichten teruggeven voor een bepaalde username
  //Tip: req.params.username
  //(zonder mongoDb) Response kan zijn: {“message”: “GETTING message for username username”}
}) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})