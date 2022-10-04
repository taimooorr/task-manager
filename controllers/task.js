const Task = require('../models/task');
const getAllTasks = (req, res) => {
    res.send('Get all tasks');
}
const createTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({task});
}
const getSingleTask = (req, res) => {
    res.json({
        id: 1,
        title: 'Task 1',
    })
}
const updateTask= (req, res) => {
    res.send('Update task');
}
const deleteTask = (req, res) => {
    res.send('Delete task');
}




module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}