const router=require('express').Router();
const categoriesController=require('../controller/categoriesController');
const protectAuth=require("../middleware/protectAuth");
const roleAccess=require("../middleware/roleAccess")
router.get('/',categoriesController.getAllCategory);
router.get('/:id',categoriesController.getOneCategory);
router.post('/',categoriesController.createCategory);
router.patch('/:id',roleAccess("admin","guide"),categoriesController.updateCategory);
router.delete('/:id',roleAccess("admin"),categoriesController.deleteCategory);

module.exports=router;