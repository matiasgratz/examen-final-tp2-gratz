const Sensor = require('../domain/Sensor');
const Alerta = require('../domain/Alerta');

class RegistrarLectura {
  constructor({ sensorDao, alertaDao }) {
    this.sensorDao = sensorDao;
    this.alertaDao = alertaDao;
  }

  ejecutar(datos) {
    const sensor = new Sensor(datos);
    this.sensorDao.guardar(sensor);

    const mensaje = sensor.evaluarAlerta();

    if (mensaje) {
      this.alertaDao.guardar(new Alerta(sensor, mensaje));
    } else {
      this.alertaDao.eliminarPorSensorId(sensor.id);
    }

    return { ...sensor, alerta: mensaje };
  }
}

module.exports = RegistrarLectura;
