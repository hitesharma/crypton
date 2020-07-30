const KeyManager = require("../lib/KeyManager");
const CryptoAPI = require("../lib/CryptoAPI");
const colors = require("colors");

const check = {
  async price(cmd) {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      const api = new CryptoAPI(key);

      const priceData = await api.getPriceData(cmd.coin, cmd.curr);

      console.log(priceData);
    } catch (err) {
      console.error(err.message.red);
    }
  },

  async high(cmd) {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      const api = new CryptoAPI(key);

      const highData = await api.getHighData(cmd.coin);

      console.log(highData);
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = check;
