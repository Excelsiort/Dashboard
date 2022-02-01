const router = require('express').Router();
const userController = require('../controllers/user.controller');


router.get("/about.json", userController.getInfos);

module.exports = router;