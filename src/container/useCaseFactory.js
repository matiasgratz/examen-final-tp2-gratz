const daoFactory = require('./daoFactory');

const RegistrarLectura = require('../usecases/RegistrarLectura');
const ListarSensores = require('../usecases/ListarSensores');
const ListarAlertas = require('../usecases/ListarAlertas');

module.exports = {
  getRegistrarLectura: () =>
    new RegistrarLectura({
      sensorDao: daoFactory.getSensorDao(),
      alertaDao: daoFactory.getAlertaDao(),
    }),

  getListarSensores: () =>
    new ListarSensores({ sensorDao: daoFactory.getSensorDao() }),

  getListarAlertas: () =>
    new ListarAlertas({ alertaDao: daoFactory.getAlertaDao() }),
};
