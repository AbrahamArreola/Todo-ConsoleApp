const createOptions = {
    description: {
        alias: 'd',
        demand: true
    }
}

const updateOptions = {
    description: {
        alias: 'd',
        demand: true
    },
    completed: {
        alias: 'c',
        default: true
    }
}

const argv = require('yargs')
                    .command("create", "Create to-do task", createOptions)
                    .command("update", "Update to-do task", updateOptions)
                    .help()
                    .argv;

module.exports = {
    argv
}