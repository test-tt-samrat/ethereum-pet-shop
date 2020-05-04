Step by step guide on how to deploy sample dapp
=====================================================

Install Prerequisites

Truffle v4.1.14

=====================================================

Once you've downloaded the sample app, the first step would be to create a CDE workspace using this sample dapp.

1) Select 'Dashboard' from side menu, under My CDE Workspace', click on the '+'' button and create a new CDE workspace
2) Enter a workspace name, select 'Ethereum' blockchain, type of application is 'Application' and runtime environment will be 'standard'
3) Choose any stack with truffle and ganache, e.g. 'ML-Truffle-Ganache', ram can leave it at default, under project, select the repository pointing to this sample dapp
4) Blockchain network can be configured later on, so skip and click 'Confirm & Submit'
5) Once created, click on the play icon to start the workspace, the red circle will turn to green once it has started successfully

=====================================================

Create blockchain network

1) Select 'Blockchain Ops' from side menu, under 'My Blockchains', click on the '+' button and create a new blockchain network
2) Select 'Ethereum Proof-of-Authority Consortium'
3) Choose 'Ready to Go'
4) Enter preferred password, confirm password and a prefix
5) Click submit and a new blockchain network will be created
6) Once created, click on the play icon to start the blockchain network, the red circle will turn to green once it has started successfully
7) Once started, click on ? icon and note down the 'External RPC URL', 'Internal RPC URL'
8) Under 'Retrieve private key and accounts', key in the password you have specified in the setup previously and click 'Retreive'
9) Click on the key icon under 'Member 1' to copy the private key, note down the private key as well

=====================================================

Launch sample dapp CDE workspace and setup blockchain configurations

1) Go back to 'Dashboard' and launch the CDE workspace created for this sample dapp
2) Open up 'truffle.js' from the project explorer
3) Search for 'privKeys' and replace the array entry with the private key from previously created blockchain network
4) Search for 'HDWalletProvider' and replace the 2nd parameter with the 'Internal RPC URL' from previously created blockchain network

=====================================================

Launch internet browser and configure MetaMask, use Google Chrome (recommended)

1) Go to https://metamask.io/ and get the chrome extension for MetaMask
2) Once installed, there will be a fox icon on the right side of address bar
3) Click on the fox icon to launch MetaMask, you may have to create and login to an account first before you can import an account using blockchain private key
4) Search for steps on how to import account using private key to MetaMask and set it up accordingly, use previously created blockchain private key
5) At the top of MetaMask should indicate the network connected, default is 'Main Ethereum Network', click on it and select 'Custom RPC'
6) Under 'New Network', enter 'External RPC URL' from previously created blockchain network and click 'Save'
7) If connected successfully, network connected should indicate 'Private Network'

=====================================================

Now you're ready to deploy the sample dapp

1) Select 'Terminal' from console, type in 'cd sample-ethereum-pet-shop' to go into the project root directory for sample dapp
2) Type in npm install to install node modules
3) Type in 'truffle compile' to compile the smart contracts
4) Type in 'truffle migrate' to migrate smart contracts to blockchain network, should run without errors if blockchain network is configured properly
5) Type in 'npm run dev' to start the sample dapp frontend server
6) Beside the console, under 'Machines', right click 'truffle/dev-machine' and select 'Servers'
7) Look for 'node' under 'Reference' and click on the URL
8) MetaMask should be auto prompted as popup, click 'Connect' to allow MetaMask to connect to sample dapp

=====================================================

Congratulations! You've just deployed the sample dapp! Start by choosing a pet and click on the 'Adopt' button, you will get a feel of how a blockchain dapp function.
Credits to Truffle for its comprehensive guide on creating this dapp! 
For additional information, read up at https://truffleframework.com/tutorials/pet-shop to find out how to customize sample dapp to your needs. 