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
    var _greeting = farmInfo ;
    var farminformationContract = web3.eth.contract(abi);
    var contractInstance = farminformationContract.at("0x3Bc9Aaa28670001A187aB1e616eCB825Eb2E7E88");
    var transactionObj = {
        from: '0xE71A1Cb389dc5B877E4c032492a2c83AC522460a'
    }
    contractInstance.setGreeting(_greeting, transactionObj, function(){
        var test = contractInstance.greet();
    })
};