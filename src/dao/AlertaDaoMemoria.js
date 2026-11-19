class AlertaDaoMemoria {
  constructor() {
    this.alertas = new Map();
  }

  guardar(alerta) {
    this.alertas.set(alerta.id, alerta);
    return alerta;
  }

  eliminarPorSensorId(id) {
    this.alertas.delete(id);
  }

  listar() {
    return [...this.alertas.values()];
  }
}

module.exports = AlertaDaoMemoria;
