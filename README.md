# Re-Fungible Collectable Token. N.F.T. that you can divide into Shares.

+-Users can Connect their Wallets and Mint N.F.T.s that can be divided into Shares.

## +-For Testing the Successful S.C. DEMO Deployed in the Mumbai Polygon Mumbai TestNet:\_
Smart Contract deployed with the account: ------------------
https://mumbai.polygonscan.com/address/------------------

+-You can get Mumbai Test Matic Here:\_
https://faucet.matic.network

## +-Quick Project start:\_

+-(1)-The first things you need to do are cloning this repository and installing its
dependencies:

```sh
npm install
```

+-(2)-Connect Ganache(The Truffle Suite Local Testing Node) with Metamask and create a Test Account:_
https://www.linkedin.com/pulse/using-ganache-ethereum-emulator-metamask-farhan-khan/
, and then in a Terminal let's Compile, Deploy in a Local Node and Test your Project with Truffle:\_
+-IMPORTANT NOTE:_ While trying to Compile the Smart Contracts with Truffle, you will probably have issues related to the Solidity Version of the OpenZeppelin Library Smart Contracts; so after Installing them you will have to go the Library Smart Contract Files and change their Solidity Versions to the one used by "truffle-config.js" manually.

https://www.trufflesuite.com/docs/truffle/getting-started/running-migrations

```sh
truffle compile
truffle migrate --reset
truffle test
```
## +-Deploying the Project to the Polygon Mumbai TestNet:_

+-(3)-Copy and Paste the File ".env.example" inside the same Root Folder(You will Duplicate It) and then rename it removing the part of ".example" so that it looks like ".env" and then fill all the Data Needed Inside the File. In the part of "ALCHEMY_API_KEY" just write the KEY, not the whole URL.

+-(4)-Deploy the Smart Contract to the Polygon Mumbai Ethereum Test Network(https://www.trufflesuite.com/guides/deploying-to-the-live-network):\_

```sh
truffle migrate --network=mumbai
```

## +-Deploying the Project to the Polygon MainNet:_

+-(5)-Deploy the Smart Contract to the Polygon Main Network(https://www.trufflesuite.com/guides/deploying-to-the-live-network):\_

```sh
truffle migrate --network=polygon
```
