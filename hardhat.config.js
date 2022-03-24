/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-waffle");

const { API_URL, PRIVATE_KEY, COINMARKETCAP_API_KEY } = process.env;
module.exports = {
  solidity: {
    version: "0.8.1",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10,
      },
    },
  },
  defaultNetwork: "ropsten",
  networks: {
     hardhat: {},
     ropsten: {
        url: API_URL,
        accounts: [`0x${PRIVATE_KEY}`]
     }
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 20,
    coinmarketcap: COINMARKETCAP_API_KEY
  }
}
