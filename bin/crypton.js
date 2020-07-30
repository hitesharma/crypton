#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');

program
    .version(pkg.version)
    .command('key', 'manage api key -- Get @ https://nomics.com')
    .command('check','Check crypto price')
    .parse(process.argv);
