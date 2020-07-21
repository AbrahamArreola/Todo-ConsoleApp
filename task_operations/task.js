const fs = require('fs');
const colors = require('colors');

let tasks, taskID;

let saveData = () => {

    return new Promise((resolve, reject) => {
        let data = JSON.stringify(tasks);

        fs.writeFile("database/database.json", data, (err) => {
            if(err){
                reject(`Unable to save data:\n${err}`);
                return;
            }
            else{
                resolve("Task saved");
                return;
            }
        });
    });
}

let retrieveData = () => {
    try{
        tasks = require('../database/database.json');
        taskID = tasks[tasks.length - 1].id;
    }catch(err){
        tasks = [];
        taskID = 0;
    }
};

let createTask = (description) => {
    retrieveData();

    let task = {
        id: ++taskID,
        description,
        completed: false
    }

    tasks.push(task);

    saveData().then((msg) => console.log(msg.green)).catch((err) => console.log(err.red)); 
};

let listTasks = () => {
    retrieveData();

    tasks.forEach(task => {
        console.log("======== Task ========");
        console.log(`id: ${task.id}\n${task.description}\nCompleted: ${task.completed}`);
        console.log("======================");
    });
};

let updateTask = (id, completed) => {
    retrieveData();

    let taskIndex = tasks.findIndex((task) => task.id == id);

    if(taskIndex == -1)
        console.log(`There is no task with id ${id}`.red);
    else{
        tasks[taskIndex].completed = completed;
        saveData().then((msg) => console.log(msg.green)).catch((err) => console.log(err.red));
    }
}

let deleteTask = (id) => {
    retrieveData();

    let newTasks = tasks.filter((task) => task.id != id);

    if(tasks.length ==  newTasks.length){
        console.log(`There is no task with id ${id} to delete`.yellow);
    }
    else{
        tasks = newTasks;
        saveData().then(() => console.log("Task deleted".green)).catch((err) => console.log(err.red));
    }
};

module.exports = {
    createTask,
    retrieveData,
    listTasks,
    updateTask,
    deleteTask
}