const axios = require("axios");
const colors = require("colors");

class CryptoAPI {
  constructor(apiKey) {
    (this.apiKey = apiKey),
      (this.baseUrl = "https://api.nomics.com/v1/currencies/ticker");
  }

  async getPriceData(coinOp, currOp) {
    try {
      const res = await axios.get(
        `${this.baseUrl}?key=${this.apiKey}&ids=${coinOp}&convert=${currOp}`
      );

      let output = "";

      res.data.forEach((coin) => {
        output += `${coin.rank.magenta} - ${coin.symbol.yellow} (${
          coin.name.cyan}) | Price: ${coin.price.green}\n`;
      });

      return output;
    } catch (err) {
      console.error(err);
    }
  }

  async getHighData(coinOp) {
    try {
      const res = await axios.get(
        `${this.baseUrl}?key=${this.apiKey}&ids=${coinOp}`
      );

      let output = "";

      res.data.forEach((coin) => {
        output += `${coin.rank.magenta} - ${coin.symbol.yellow} (${
          coin.name.cyan}) | High: ${coin.high.green} | Timestamp: ${
          coin.high_timestamp.grey}\n`;
      });

      return output;
    } catch (err) {
      console.error(err);
    }
  }

  async getSupplyData(coinOp) {
    try {
      const res = await axios.get(
        `${this.baseUrl}?key=${this.apiKey}&ids=${coinOp}`
      );

      let output = "";

      res.data.forEach((coin) => {
        output += `${coin.rank.magenta} - ${coin.symbol.yellow} (${
          coin.name.cyan}) | Current Supply: ${
          coin.circulating_supply.green} | Max Supply: ${
          coin.max_supply === undefined ? undefined : coin.max_supply.grey
          }\n`;
      });

      return output;
    } catch (err) {
      console.error(err);
    }
  }

  async getCapData(coinOp) {
    try {
      const res = await axios.get(
        `${this.baseUrl}?key=${this.apiKey}&ids=${coinOp}`
      );

      let output = "";

      res.data.forEach((coin) => {
        output += `${coin.rank.magenta} - ${coin.symbol.yellow} (${
          coin.name.cyan}) | Market Cap: ${coin.market_cap.green}\n`;
      });

      return output;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = CryptoAPI;
