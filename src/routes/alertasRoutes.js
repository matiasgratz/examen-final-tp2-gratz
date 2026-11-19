const { Router } = require('express');
const controller = require('../controllers/alertasController');

const router = Router();
router.get('/', controller.listar);

module.exports = router;
