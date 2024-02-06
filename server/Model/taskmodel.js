import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  deadline: { type: Date, required: true },
  description: { type: String },
  priority: { type: String},
  userId:{type:String}
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
