const router=require('express').Router();
const productsController=require('../controller/productsController');
const protectAuth=require("../middleware/protectAuth");
const roleAccess=require("../middleware/roleAccess");
const upload=require("../utils/multer");
router.get('/',productsController.getAllProducts);
router.get('/:id',productsController.getOneProduct);
router.post('/',upload.any('images'),productsController.createProduct);
router.patch    ('/:id',roleAccess("admin","guide"),productsController.updateProduct);
router.delete('/:id',roleAccess("admin"),productsController.deleteProduct);

module.exports=router;