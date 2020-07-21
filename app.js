const {argv} = require('./config/yargs');
const tasks = require('./task_operations/task');

let command = argv._[0];

switch(command){
    case "create":
        tasks.createTask(argv.description);
    break;

    case "update":
        tasks.updateTask(argv.id, argv.completed);
    break;

    case "list":
        tasks.listTasks();
    break;

    default:
        console.log("Unknown command");
    break;
}