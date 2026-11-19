class ListarAlertas {
  constructor({ alertaDao }) {
    this.alertaDao = alertaDao;
  }

  ejecutar() {
    return this.alertaDao.listar();
  }
}

module.exports = ListarAlertas;
