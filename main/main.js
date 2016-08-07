let readline = require('readline');
let route = require('./route');

function sendToRoute(line) {
    let response = route(line);
    console.log(response.text);
    if (response.rerun) {
        sendToRoute(line);
    }
}

function first(line) {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    rl.on('line', function (line) {
        sendToRoute(line);
    });

    sendToRoute();
}
first();
module.exports = first;
