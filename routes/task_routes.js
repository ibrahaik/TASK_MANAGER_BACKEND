const express = require('express');
const router = express.Router();
const {
  getTasks,
  createTask,
  updateTask,
  patchTask,
  deleteTask,
} = require('../controllers/task_controllers');

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.patch('/:id', patchTask);
router.delete('/:id', deleteTask);

module.exports = router;
