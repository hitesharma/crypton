const program = require('commander');
const check = require('../command/check');
const coins = ['BTC', 'ETH', 'XRP', 'BCH', 'BSV', 'LTC', 'ADA', 'BNB', 'EOS', 'LINK', 'XTZ'];

program
    .command('price')
    .description('Check crypto price')
    .option(
        '--coin <type>',
        'Add specific crypto CSV format',
        coins
    )
    .option(
        '--curr <currency>',
        'Change currency',
        'USD'
    )
    .action((cmd) => check.price(cmd));

program
    .command('high')
    .description('Get all time high price')
    .option(
        '--coin <type>',
        'Add specific crypto CSV format',
        coins
    )
    .action((cmd) => check.high(cmd));

program
    .command('supply')
    .description('Get market supply')
    .option(
        '--coin <type>',
        'Add specific crypto CSV format',
        coins
    )
    .action((cmd) => check.supply(cmd));

program
    .command('cap')
    .description('Get market cap')
    .option(
        '--coin <type>',
        'Add specific crypto CSV format',
        coins
    )
    .action((cmd) => check.cap(cmd));

program.parse(process.argv);