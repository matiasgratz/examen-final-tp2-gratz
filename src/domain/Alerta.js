class Alerta {
  constructor(sensor, mensaje) {
    this.id = sensor.id;
    this.tipo = sensor.tipo;
    this.valor = sensor.valor;
    this.timestamp = sensor.timestamp;
    this.alerta = mensaje;
  }
}

module.exports = Alerta;
