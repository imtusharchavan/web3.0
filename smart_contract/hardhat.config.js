require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Y4AraQANe6GpwOwym3XqNEUqvMJ6gESL',
      accounts: [ '82410495b55ee27218f19bb3d8a00b9088dcec9ce51a11ca371060c3114dafbe' ]
    }
  }
};


// https://eth-goerli.g.alchemy.com/v2/Y4AraQANe6GpwOwym3XqNEUqvMJ6gESL