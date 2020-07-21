const createOptions = {
    description: {
        alias: 'd',
        demand: true
    }
}

const updateOptions = {
    id: {
        alias: 'i',
        demand: true
    },
    completed: {
        alias: 'c',
        default: true
    }
}

const deleteOptions = {
    id: {
        alias: 'i',
        demand: true
    }
}

const argv = require('yargs')
                    .command("create", "Creates to-do task", createOptions)
                    .command("update", "Updates to-do task", updateOptions)
                    .command("delete", "Deletes to-do task", deleteOptions)
                    .help()
                    .argv;

module.exports = {
    argv
}