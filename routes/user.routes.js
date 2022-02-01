const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');

//auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.signOut);

//user DB
router.get("/", userController.getAllUsers);
router.get('/:id', userController.userInfo);
router.put("/:id", userController.updateUser);
router.put("/exchange/:id", userController.updateCurrency);
router.put("/youtube/:id", userController.updateYoutube);
router.put("/youtubelink/:id", userController.updateYoutubeLink);
router.put("/activity/:id", userController.updateAct);
router.put("/age/:id", userController.updateAgeN);
router.put("/city/:id", userController.updateWcity);
router.delete('/:id', userController.userDelete);
//router.get("/data", userController.getData);


module.exports = router;