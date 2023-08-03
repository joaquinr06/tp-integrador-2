const express = require ('express');
const router = express.Router();
const controller = require('../controllers/productsController')


router.get('/listar', controller.listar);
router.get('/detalle', controller.detalle);
router.post('/crear', controller.crear);
router.get('/product/:id', controller.id);



module.exports = router;