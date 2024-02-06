import express from 'express';
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from '../Controller/taskcontroller.js';

const router = express.Router();

// GET all tasks
router.get('/', getAllTasks);

// GET a task by ID
router.get('/:id', getTaskById);

// POST create a new task
router.post('/', createTask);

// PUT update a task by ID
router.put('/:id', updateTask);

// DELETE a task by ID
router.delete('/:id', deleteTask);

export default router;
