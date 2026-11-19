const { ValidationError, NotFoundError } = require('../errors/errors');

module.exports = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(400).json({ errorMsg: err.message });
  }
  if (err instanceof NotFoundError) {
    return res.status(404).json({ errorMsg: err.message });
  }
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ errorMsg: 'JSON inválido' });
  }
  console.error(err);
  res.status(500).json({ errorMsg: 'Error interno del servidor' });
};
