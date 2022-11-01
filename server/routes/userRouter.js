const router=require('express').Router();
const authController=require('../controller/authController');
const userController=require("../controller/userController")
const protectAuth=require("../middleware/protectAuth");


router.post('/signup',authController.signup);
router.post('/login',authController.login);



router.post('/forgetPassword',authController.forgetPassword);
router.patch('/resetPassword/:token',authController.resetPassword);
router.patch('/changePassword',protectAuth,userController.changePassword);
router.patch('/',protectAuth,userController.changeUserData);


module.exports=router;