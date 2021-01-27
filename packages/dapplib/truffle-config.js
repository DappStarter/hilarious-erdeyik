require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half enter blue tooth notice rival smile protect include case furnace spot'; 
let testAccounts = [
"0x8badc2f2507697adeeddb5cc385172f738702f9f7798d5574f8ac2f3ef17a2cf",
"0x8a2751dd64caf309f98fb52311d849e53549d1a4c8d91d102d6d6418c478f123",
"0x4adc7018ac174dba79ba7b43667b9adfd5eac3da82fd07503c9493b3215d9a72",
"0x367826aae66a0080324401a240273d52e1f42aa62b5f1e6ee14baaa42fdadfaf",
"0xe2e5b662373ca36d13827030e9622bb1e000821850a9397971bc6916a1231f5f",
"0x3631350fb756212aba97e1b4a2d7e67985692f641cfe10e69b0c955a96e84c0b",
"0xdb9744219b9738968d5572c51089cea349422548d6efdb13813eaac0f32e2411",
"0x8335311997b8c0acd58f514d3167e860ebdcd4fedb853127dac6e4fe738c29e1",
"0x8726f9be7c2c7d5f029f72ce1a42e6ab3bf986975a2bd094507142a11e277d24",
"0xb2c2652ff1aa5993d79cac09426e3eb4518ea6d1be41fc4923bb62e069429711"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
