const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send('/')
})

app.get("/api/v1/messages", (req, res) => {
  res.send("/api/v1/messages")
  //homepage pug

}) 

app.get("/api/v1/messages/:id", (req, res) => {
  res.send("/api/v1/messages")
  //Geef messages terug (met mongoDB)
  //(zonder mongoDb) Response kan zijn : { “message”: “GETTING messages” }
  //geef ook effectief messages terug uit je databank (of statisch)
}) 

app.post("/api/v1/messages", (req, res) => {
  res.send("/api/v1/messages")
  //(met mongoDb) Kan een JSON-object ontvangen en bewaren en geeft het nieuwe document terug
  //Body: { message: { “user”: “Pikachu”, “text”: “nodejs isn’t hard, or is it?” } }
  //(zonder mongoDb) Response kan zijn: {“message”: “POSTING a new message for user Pikachu”}
  //Zorg dat je de naam dynamisch kan invullen en in het antwoord teruggeeft
}) 

app.put("/api/v1/messages", (req, res) => {
  res.send("/api/v1/messages")
  //(met mongoDb) Kan een JSON-object ontvangen en een specifiek bericht updaten en geeft die nieuwe bericht terug
  //(zonder MongoDb) Response kan zijn: {“message”: “UPDATING a message with id id”}
})

app.delete("/api/v1/messages", (req, res) => {
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