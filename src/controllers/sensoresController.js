const useCaseFactory = require('../container/useCaseFactory');

function listar(req, res, next) {
  try {
    res.status(200).json(useCaseFactory.getListarSensores().ejecutar());
  } catch (err) {
    next(err);
  }
}

module.exports = { listar };
