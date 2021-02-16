const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController");


router.get('/', shopController.dashboard);
router.get('/signin', shopController.signIn);
router.get('/signup', shopController.signUp);
router.post('/register',shopController.register)

module.exports = router;