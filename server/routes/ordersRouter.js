const router=require('express').Router();
const ordersController=require('../controller/ordersController');
const protectAuth=require("../middleware/protectAuth");
const roleAccess=require("../middleware/roleAccess")
router.get('/',ordersController.getAllOrders);
// router.get('/:id',ordersController.getOneOrder);
router.post('/',protectAuth,ordersController.createCart);
router.patch('/add/:id',protectAuth,ordersController.createOrder);
// router.patch('/:id',ordersController.updateOrder);
router.delete('/:id',protectAuth,ordersController.deleteOrder);
router.patch('/clear',protectAuth,ordersController.clearOrders);

module.exports=router;