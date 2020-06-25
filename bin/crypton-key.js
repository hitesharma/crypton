const program = require('commander');
const key = require('../lib/key');

program
    .command('set')
    .description('Set api key -- Get @ https://nomics.com')
    .action(key.set);

program
    .command('get')
    .description('Show api key')
    .action(key.get);

program
    .command('rm')
    .description('Remove api key')
    .action(key.rm);

program.parse(process.argv);