require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile protect just drop system square'; 
let testAccounts = [
"0x19ba55824c34d38ab7fb693e541991d0d34328423f03c06ee6b5f9066118a49e",
"0x0d48b310ab0909beaa06418f08dd03e4c2a8a5638ca75a1ba56c21fced8b4e0c",
"0xebd30679964f55a277dfd75a51a221d2e9dd8ce2d814bbbd05a66b5464100bbe",
"0x2c7ea40feab3c331e412f21339c82269b1ff3e89a3fb1f4b2061c375b0cbbf47",
"0x84a2ad0112d23e53063aee4732ae64cfb6ff4504e32f56d082053a4454fc342f",
"0xa0146fe71f343a907c63a6734432458c10edfdac410a9f3a5e983bee30298afe",
"0xbc5f66ed357ddaaafe4b9a3e850460615ce30e390067e9db79aeaaacaab1ad41",
"0xf0a0358e2610da7d062dca9f678d8fe219199c68b74a2afb26fd9ba0a7e8afb7",
"0x676f802191e2f87a1c2656a0604a4f0cb358f63aa936a00c21ad810e8e7752b2",
"0x26718d1b8895997ff0b347ffbe9c9c86a2f42fe7755821822ca6886ed015d67a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

