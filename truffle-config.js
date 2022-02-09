/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();
const path = require("path");
const web3 = require("web3");
/**const ROPSTEN_PRIVATE_KEY = process.env["ROPSTEN_PRIVATE_KEY"];
const RINKEBY_PRIVATE_KEY = process.env["RINKEBY_PRIVATE_KEY"];
const MAINNET_PRIVATE_KEY = process.env["MAINNET_PRIVATE_KEY"];
const ETH_ROPSTEN_ALCHEMY_API_KEY = process.env["ETH_ROPSTEN_ALCHEMY_API_KEY"]
const ETH_RINKEBY_ALCHEMY_API_KEY = process.env["ETH_RINKEBY_ALCHEMY_API_KEY"]
const ETH_MAINNET_ALCHEMY_API_KEY = process.env["ETH_MAINNET_ALCHEMY_API_KEY"]*/

const POLYGON_TESTNET_PRIVATE_KEY = process.env["(POLYGON_TESTNET_PRIVATE_KEY"];
const POLYGON_MAINNET_PRIVATE_KEY = process.env["POLYGON_MAINNET_PRIVATE_KEY"];
const POLYGON_TESTNET_ALCHEMY_API_KEY = process.env["POLYGON_TESTNET_ALCHEMY_API_KEY"]
const POLYGON_MAINNET_ALCHEMY_API_KEY = process.env["POLYGON_MAINNET_ALCHEMY_API_KEY"]

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  contracts_build_directory: path.join(__dirname, "abis"),

  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    /**ropsten: {
      provider: () => new HDWalletProvider(ROPSTEN_PRIVATE_KEY, `https://eth-ropsten.alchemyapi.io/v2/${ETH_ROPSTEN_ALCHEMY_API_KEY}`, 0),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    rinkeby : {
      provider: () => new HDWalletProvider(RINKEBY_PRIVATE_KEY, `https://eth-rinkeby.alchemyapi.io/v2/${ETH_RINKEBY_ALCHEMY_API_KEY}`, 0),
      network_id: 4,       // Rinkeby's id
      gas: 5500000,        // Rinkeby has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    mainnet: {
      provider: () => new HDWalletProvider(MAINNET_PRIVATE_KEY, `https://eth-mainnet.alchemyapi.io/v2/${ETH_MAINNET_ALCHEMY_API_KEY}`),
      network_id: 1,
      gasPrice: web3.utils.toWei('88', 'gwei'),
      timeoutBlocks: 200,
      skipDryRun: false,
      confirmations: 2
    },*/
    mumbai : {
      provider: () => new HDWalletProvider(POLYGON_TESTNET_PRIVATE_KEY, `https://eth-rinkeby.alchemyapi.io/v2/${POLYGON_TESTNET_ALCHEMY_API_KEY}`, 0),
      network_id: 80001,    // Mumbai's id
      gas: 5500000,        // Mumbai has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    polygon: {
      provider: () => new HDWalletProvider(POLYGON_MAINNET_PRIVATE_KEY, `https://eth-mainnet.alchemyapi.io/v2/${POLYGON_MAINNET_ALCHEMY_API_KEY}`),
      network_id: 137,
      gasPrice: web3.utils.toWei('88', 'gwei'),
      timeoutBlocks: 200,
      skipDryRun: false,
      confirmations: 2
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    reporter: 'eth-gas-reporter',
    reporterOptions: {
      coinmarketcap: process.env["COINMARKET_API_KEY"]
    }
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.7.3",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "petersburg"
      }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  //
  // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
  // those previously migrated contracts available in the .db directory, you will need to run the following:
  // $ truffle migrate --reset --compile-all

  db: {
    enabled: false
  }
};
