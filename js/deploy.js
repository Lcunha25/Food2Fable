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
    var _greeting = farmInfo + '\n';
    var farminformationContract = web3.eth.contract(abi);
    var contractInstance = farminformationContract.at("0x06c667A481921F1b8897D5Fe6DAbE4aC13B46424");
    var transactionObj = {
        from: '0xe638a5BB494A2eE91cB6697c172Bf9E07C548432'
    }
    contractInstance.setGreeting(_greeting, transactionObj, function(){
        var callForInfo = contractInstance.greet();
        $('#input-1').append(callForInfo);
    })
};