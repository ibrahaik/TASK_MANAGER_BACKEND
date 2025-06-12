const Task = require('../models/Task');

// Obtener todas las tareas
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear tarea
const createTask = async (req, res) => {
  try {
    const { nombre, descripcion, fecha, estado } = req.body;
    const newTask = new Task({ nombre, descripcion, fecha, estado });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar tarea completa (PUT)
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedTask) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar parcialmente (PATCH)
const patchTask = async (req, res) => {
  try {
    const { id } = req.params;
    const patchedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    if (!patchedTask) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json(patchedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Borrar tarea
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json({ message: 'Tarea eliminada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  patchTask,
  deleteTask,
};
