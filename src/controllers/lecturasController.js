const useCaseFactory = require('../container/useCaseFactory');

function registrar(req, res, next) {
  try {
    const resultado = useCaseFactory.getRegistrarLectura().ejecutar(req.body);
    res.status(201).json(resultado);
  } catch (err) {
    next(err);
  }
}

module.exports = { registrar };
