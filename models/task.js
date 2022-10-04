const mongoose  = require ('mongoose');


const TaskSchema = new mongoose.Schema({
    name:String,completed:Boolean,
    createdAt:{
        type:Date,
    },
    completedAt:{
        type:Date,
    }
});
const TaskModel = mongoose.model('Task',TaskSchema);

module.exports = TaskModel;
