
const path = require('path');
const fs = require('fs');
const cluster = require('cluster');
const yargs = require('yargs');
const readline = require('readline');

var isRunning = false;

/**
 * Start a JS file.
 * @param {String} file Path to the file
 */
function start(file) {
  if (isRunning) return;
  isRunning = true;

  let args = [path.join(__dirname, file), ...process.argv.slice(2)];
  
  cluster.setupMaster({
    exec: path.join(__dirname, file),
    args: args.slice(1),
  });

  let p = cluster.fork();

  p.on('message', data => {
    console.log('[RECEIVED]', data);

    switch (data) {
      case 'reset':
      case 'null': // Combine both cases for simplicity
        console.log('Restart requested.');
        p.process.kill();
        isRunning = false;
        start.apply(this, arguments);
        break;
    }
  });

  p.on('exit', (code, signal) => {
    isRunning = false;

    if (signal) {
      console.error('Process was killed by signal:', signal);
    } else if (code !== 0) {
      console.error('Process exited with code:', code);
    } else {
      console.log('Process exited normally.');
    }

    if (code == null) process.exit();

    console.log('Restarting process...');
    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0]);
      start(file);
    });
  });

  let opts = new Object(
    yargs(process.argv.slice(2)).exitProcess(false).parse()
  );

  if (!opts['test']) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    if (!rl.listenerCount('line')) {
      rl.on('line', line => {
        p.send(line.trim());
      });
    }
  }
}

start('main.js');