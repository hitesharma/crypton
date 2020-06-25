const Configstore = require('configstore');
const pkg = require('../package.json');
class KeyManager {
    constructor() {
        this.conf = new Configstore(pkg.name);
    }

    setKey(key){
        this.conf.set('apiKey', key);
        return key;
    }

    getKey(){
        const key = this.conf.get('apiKey');
        if(!key){
            throw new Error('No api key found -- Get key @ http://nomics.com');
        }
        return key;
    }

    deleteKey(){
        const key = this.conf.get('apiKey');
        if(!key){
            throw new Error('No api key found');
        }
        this.conf.delete('apiKey');
        return;
    }
}

module.exports = KeyManager;