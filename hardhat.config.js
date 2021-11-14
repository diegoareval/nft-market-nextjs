require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync('.secret').toString();
const projectId = 'd5b54fa562cb45aba0a9fd370c3abe88'

module.exports = {
  networks: {
     hardhat: {
       chainId: 1337
     },
    mumbai: {
         url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
        accounts: [privateKey]

    },
    mainnet: {
         url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
        accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};