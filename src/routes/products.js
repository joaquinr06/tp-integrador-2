const express = require ('express');
const router = express.Router();
const controller = require('../controllers/productsController')

router.get('/crear', controller.crear);
router.get('/detalle', controller.detalle);
router.get('/listar', controller.listar);
router.get('/producto/:id', controller.id);


module.exports = router;