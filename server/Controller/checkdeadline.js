// checkDeadlines.js
import Task from '../Model/taskmodel.js';
import moment from 'moment-timezone';
 import sendnotification from './sendnotification.js';
const checkDeadlines = async () => {
  try {
    const tasks = await Task.find();
    

    tasks.forEach((task) => {
      const currentTime = moment().tz('America/New_York'); // Change 'America/New_York' to your desired timezone
    

      let taskDeadline = moment(task.deadline).tz('America/New_York'); // Convert task.deadline to a moment object
     
      // Set the time portion to 11:59:59
      taskDeadline.set({ hour: 23, minute: 59, second: 59 });
      const remainingTime = taskDeadline.diff(currentTime);
      // Check if remaining time is less than 10 hours and send 10-hour notification
      if (remainingTime < 10 * 60 * 60 * 1000 && remainingTime > 3 * 60 * 60 * 1000) {
        sendnotification(task, '10');
      }

      // Check if remaining time is less than 3 hours and send 3-hour notification
      if (remainingTime < 3 * 60 * 60 * 1000) {
        sendnotification(task, '3');
      }
    });
  } catch (error) {
    console.error('Error fetching tasks or sending notifications:', error);
  }
};

export default checkDeadlines;
