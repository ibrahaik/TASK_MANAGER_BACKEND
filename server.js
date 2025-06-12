const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const routes = require('./routes/task_routes');

const app = express();
const PORT = 5000;

// Conectar a MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Servidor arrancado en http://localhost:${PORT}`);
});
