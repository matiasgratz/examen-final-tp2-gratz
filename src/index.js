const express = require('express');
const config = require('./config');
const lecturasRoutes = require('./routes/lecturasRoutes');
const sensoresRoutes = require('./routes/sensoresRoutes');
const alertasRoutes = require('./routes/alertasRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use('/lecturas', lecturasRoutes);
app.use('/sensores', sensoresRoutes);
app.use('/alertas', alertasRoutes);

app.use((req, res) => res.status(404).json({ errorMsg: 'Ruta no encontrada' }));
app.use(errorHandler);

app.listen(config.port, () =>
  console.log(`Servidor escuchando en http://localhost:${config.port}`)
);
