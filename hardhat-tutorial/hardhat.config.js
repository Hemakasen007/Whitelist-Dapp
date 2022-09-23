require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path: ".env"});

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const POLYGON_PRIVATE_KEY = process.env.POLYGON_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    polygon:{
      url: ALCHEMY_API_KEY_URL,
      accounts: [POLYGON_PRIVATE_KEY]
    },
  },
};
