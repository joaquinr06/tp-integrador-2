const express = require ('express');
const router = express.Router();
const productController = require('../controllers/productsController')

router.get('/crear', productController.crear);
router.get('/detalle', productController.detalle);
router.get('/listar', productController.listar);
router.get('/producto/:id', productController.id);


module.exports = router;