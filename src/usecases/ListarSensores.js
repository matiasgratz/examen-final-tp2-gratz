class ListarSensores {
  constructor({ sensorDao }) {
    this.sensorDao = sensorDao;
  }

  ejecutar() {
    return this.sensorDao.listar();
  }
}

module.exports = ListarSensores;
