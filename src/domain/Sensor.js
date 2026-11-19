const { ValidationError } = require('../errors/errors');
const ReglaAlerta = require('./ReglaAlerta');

const TIPOS = ['TEMPERATURA', 'HUMEDAD', 'CO2'];
const ID_REGEX = /^[a-zA-Z0-9]{8}$/;

class Sensor {
  constructor({ id, tipo, valor, timestamp } = {}) {
    if (typeof id !== 'string' || !ID_REGEX.test(id)) {
      throw new ValidationError('id debe tener exactamente 8 caracteres alfanuméricos');
    }
    if (!TIPOS.includes(tipo)) {
      throw new ValidationError(`tipo debe ser uno de: ${TIPOS.join(', ')}`);
    }
    if (typeof valor !== 'number' || !Number.isFinite(valor)) {
      throw new ValidationError('valor debe ser un número válido');
    }
    if (typeof timestamp !== 'string' || timestamp.trim() === '') {
      throw new ValidationError('timestamp debe ser un string');
    }

    this.id = id;
    this.tipo = tipo;
    this.valor = valor;
    this.timestamp = timestamp;
  }

  evaluarAlerta() {
    return ReglaAlerta.evaluar(this.tipo, this.valor);
  }
}

module.exports = Sensor;
