// import json from './data.json' assert {type : 'json'};
const json = require('./employees.json');

function uet(args) {
    if (!args) {
        json.command.forEach(printOut);
        console.log(json.command[0]);
    }
}

function printOut(value) {
    addLine(value);
}