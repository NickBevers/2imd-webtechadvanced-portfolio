function getMessage(req, res){
    if(req.query.user != null){
        let user = req.query.user;
        res.json({
            status: "Succes",
            message: `GETTING a new message for user ${user}`

            //(met mongoDb) Kan berichten teruggeven voor een bepaalde username
            //Tip: req.params.username
            //(zonder mongoDb) Response kan zijn: {“message”: “GETTING message for username username”}
        })
    }
    else{
        res.json({
        status: "Succes",
        message: "GETTING messages"

        //Geef messages terug (met mongoDB)
        //(zonder mongoDb) Response kan zijn : { “message”: “GETTING messages” }
        //geef ook effectief messages terug uit je databank (of statisch)
    })
    } 
}

function getId(req, res){
    let id = req.params.id;
    res.json({
        status: "Succes",
        message: `GETTING message with ID ${id}`
    })
    //(met mongoDb) Geeft message met specifiek id terug
    //(zonder mongoDb) Response kan zijn : { “message”: “GETTING message with ID id” }
}

function setMessage(req, res){
    let user = req.params.user;
    res.json({
        status: "Succes",
        message: `POSTING a new message for user ${user}`
    })
    //(met mongoDb) Kan een JSON-object ontvangen en bewaren en geeft het nieuwe document terug
    //Body: { message: { “user”: “Pikachu”, “text”: “nodejs isn’t hard, or is it?” } }
    //(zonder mongoDb) Response kan zijn: {“message”: “POSTING a new message for user Pikachu”}
    //Zorg dat je de naam dynamisch kan invullen en in het antwoord teruggeeft
}

function putId(req, res){
    let id = req.params.id;
    res.json({
        status: "Succes",
        message: `UPDATING a message with id ${id}`
    })
    //(met mongoDb) Kan een JSON-object ontvangen en een specifiek bericht updaten en geeft die nieuwe bericht terug
    //(zonder MongoDb) Response kan zijn: {“message”: “UPDATING a message with id id”}
}

function deleteId(req, res){
    let id = req.params.id;
    res.json({
        status: "Succes",
        message: `DELETING a message with id ${id}`
    })
    //(met mongoDb) Kan een message met id verwijderen en geeft een response terug {“status”: “success”, “message”: “The message was removed”}
    //(zonder mongoDb) Response kan zij: {“message”: “DELETING a message with id id”}
}


module.exports.getMessage = getMessage;
module.exports.getId = getId;
module.exports.setMessage = setMessage;
module.exports.putId = putId;
module.exports.deleteId = deleteId;
