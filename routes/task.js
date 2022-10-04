const express = require('express');
const router = express.Router();
const {getAllTasks,createTask,getSingleTask,
updateTask,deleteTask} = require('../controllers/task');


// @route   GET and post api/tasks
router.route('/').get(getAllTasks).post(createTask);
// @route   GET, PUT and DELETE api/tasks/:id
router.route('/:id').get(getSingleTask).put(updateTask).delete(deleteTask);


//export router
module.exports = router;