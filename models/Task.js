const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, default: '' },
  fecha: { type: Date, default: Date.now },
  estado: { type: String, enum: ['pendiente', 'completada'], default: 'pendiente' },
});

module.exports = mongoose.model('Task', TaskSchema);
