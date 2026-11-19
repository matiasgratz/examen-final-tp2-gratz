const SensorDaoMemoria = require('../dao/SensorDaoMemoria');
const AlertaDaoMemoria = require('../dao/AlertaDaoMemoria');

const sensorDao = new SensorDaoMemoria();
const alertaDao = new AlertaDaoMemoria();

module.exports = {
  getSensorDao: () => sensorDao,
  getAlertaDao: () => alertaDao,
};
