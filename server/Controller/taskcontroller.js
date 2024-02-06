import Task from '../Model/taskmodel.js';

// Get all tasks
export const getAllTasks = async (req, res) => {
  try {
    console.log(req.query.userId)
    const tasks = await Task.find({userId:req.query.userId});
    console.log(tasks)
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Get a single task by ID
export const getTaskById = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

   return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Create a new task
export const createTask = async (req, res) => {
  const taskData = req.body;

  try {
    const newTask = await Task.create(taskData);
    return res.status(201).json(newTask);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// Update a task by ID
export const updateTask = async (req, res) => {
  const { id } = req.params;
  const taskData = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, taskData, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

   return res.status(200).json({message:"Task has been updated"});
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// Delete a task by ID
export const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return  res.status(200).json({message:"Task has been deleted"});
  } catch (error) {
   return  res.status(500).json({ message: error.message });
  }
};
