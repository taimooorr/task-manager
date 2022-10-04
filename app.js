
const express = require('express');
const app = express();
const port = 5000;
const tasks = require('./routes/task');
const connectDb = require('./db/connect');
require('dotenv').config();


//middleware
app.use(express.json());





//routes 
app.use('/api/v1/tasks', tasks);




const start = async () => {
    try {
        await connectDb(process.env.URI);
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
        console.log(error.message);
    }
}
start();
