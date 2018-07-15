web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newgreeting",
				"type": "string"
			}
		],
		"name": "setGreeting",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_greeting",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBlockNumber",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "greet",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

var walletInput = {};
function getWallet(){
	walletInput.values = $("#first-name").val();
}
$(".login100-form-btn").click(getWallet);

function setGreeting1(){
    farmInfo = $("#farmInfo").val();
    var _greeting = farmInfo;
    var farminformationContract = web3.eth.contract(abi);
    var contractInstance = farminformationContract.at("0x9deb438c60bde2020ba19c69c5063051c0c79107"); //enter contract number here
    var transactionObj = {
        from: walletInput.values //only address that deployed the contract can interact with contract
    }
    contractInstance.setGreeting(_greeting, transactionObj, function(){
        var callForInfo = contractInstance.greet();
            $('.append-1').append("<p>" + callForInfo + "</p>");
    })
};