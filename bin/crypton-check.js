const program = require('commander');
const check = require('../command/check');
const coins = ['BTC','ETH','XRP','BCH','BSV','LTC','ADA','BNB','EOS','LINK','XTZ'];

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

program.parse(process.argv);