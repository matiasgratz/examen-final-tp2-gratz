class SensorDaoMemoria {
  constructor() {
    this.sensores = new Map();
  }

  guardar(sensor) {
    this.sensores.set(sensor.id, sensor);
    return sensor;
  }

  obtenerPorId(id) {
    return this.sensores.get(id) ?? null;
  }

  listar() {
    return [...this.sensores.values()];
  }
}

module.exports = SensorDaoMemoria;
