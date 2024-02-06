import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './Config/database.js';
import taskRoutes from './Route/taskroutes.js';
import checkDeadlines from './Controller/checkdeadline.js';
import signuproutes from './Route/authroutes.js';
dotenv.config();

// Connect to MongoDB
connectDB(process.env.MONGODB_URI);

const app = express();
const PORT = process.env.PORT || 3000;
console.log(process.env.MONGODB_URI)
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/tasks', taskRoutes);
app.use('/api/v1/auth', signuproutes);
// checkDeadlines()

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
