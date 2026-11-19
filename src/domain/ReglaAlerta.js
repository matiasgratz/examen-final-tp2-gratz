const REGLAS = {
  TEMPERATURA: { dispara: (v) => v > 35, mensaje: 'TEMPERATURA alta' },
  HUMEDAD: { dispara: (v) => v < 20, mensaje: 'HUMEDAD baja' },
  CO2: { dispara: (v) => v > 1000, mensaje: 'CO2 alto' },
};

function evaluar(tipo, valor) {
  const regla = REGLAS[tipo];
  return regla && regla.dispara(valor) ? regla.mensaje : null;
}

module.exports = { evaluar };
