const express = require('express');
const router = express.Router();
const messageController = require("../controllers/index");



router.get("/", messageController.getMessage) 

router.get("/:id", messageController.getId)

router.post("/:user", messageController.setMessage)

router.put("/:id", messageController.putId)

router.delete("/:id", messageController.deleteId)

router.get("/?user=username", messageController.getUser)


module.exports = router;
