// https://eth-ropsten.alchemyapi.io/v2/ezA3yeCHgFn4cMmqOD-pzkmtyRkDyiwY

require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/ezA3yeCHgFn4cMmqOD-pzkmtyRkDyiwY',
      accounts: ['07b3dd7488eee2468418c3c61539612bc2a7d818fd906c0119507c2596370053']
    }
  }
}