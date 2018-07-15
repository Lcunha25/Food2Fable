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
function setGreeting1(){
    farmInfo = $("#farmInfo").val();
    var _greeting = farmInfo;
    var farminformationContract = web3.eth.contract(abi);
    var contractInstance = farminformationContract.at("0x5a452ac64cb3f61e236c38043b11408ef61281eb"); //enter contract number here
    var transactionObj = {
        from: '0xE71A1Cb389dc5B877E4c032492a2c83AC522460a' //only address that deployed the contract can interact with contract
    }
    contractInstance.setGreeting(_greeting, transactionObj, function(){
        var callForInfo = contractInstance.greet();
            $('.append-1').append("<p>" + callForInfo + "</p>");
    })
};