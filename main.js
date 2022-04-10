const cluster = require('cluster');

if (cluster.isMaster) {
    const os = require('os');
    const numCPUs = os.cpus().length;
    console.log('   \x1b[41m\x1b[1m    This is Main Process        \x1b[0m');
    console.log(
        '   \x1b[41m\x1b[1m    No. of Child Process :',
        numCPUs,
        '   \x1b[0m\n\n'
    );

    for (let Child = 0; Child < numCPUs; Child++) {
        cluster.fork();
    }
} else {
    console.log(
        '\x1b[34m\x1b[1m    Child Server     ProcessID:',
        process.pid,
        '\x1b[0m'
    );

    require('./server');
}
