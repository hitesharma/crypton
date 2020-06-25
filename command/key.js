const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');
const {isRequired} = require('../lib/validation');

const key = {
    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter api key: '.blue + 'https://nomics.com',
                validate: isRequired
            }
        ]);
        const key = keyManager.setKey(input.key);

        if(key){
            console.log('api key set'.green);
        }
    },
    get() {
        try{
            const keyManager = new KeyManager();
            const key = keyManager.getKey();

            console.log(key);
        }catch(err){
            console.error(err.message.red);
        }
    },
    rm() {
        try{
            const keyManager = new KeyManager();
            keyManager.deleteKey();

            console.log('api key removed'.green);
            return;
        }catch(err){
            console.error(err.message.red);
        }
    }
}

module.exports = key;