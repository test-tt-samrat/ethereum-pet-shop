//var PrivateKeyProvider = require("truffle-privatekey-provider");
 
//var privateKey = "ec96fb0b6e773f9d5193bff57532d0356b49dd73a30846be99fb7d665a012d84";

const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const privKeys = ["ec96fb0b6e773f9d5193bff57532d0356b49dd73a30846be99fb7d665a012d84"]; // private keys

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      //host: "http://bops.morpheuslabs.io",
      //port: 25511,
      provider: () => {
        return new HDWalletProvider(privKeys, "http://bops.morpheuslabs.io:25511")
      },
      network_id: "*" // Match any network id
    }
  }
};