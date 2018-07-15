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
    var contractInstance = farminformationContract.at("0x3707dfb75c7ea3c745c37c1b1f3c6a373ffad77e"); //enter contract number here
    var transactionObj = {
        from: '0xE71A1Cb389dc5B877E4c032492a2c83AC522460a' //only address that deployed the contract can interact with contract
    }
    contractInstance.setGreeting(_greeting, transactionObj, function(){
        var callForInfo = contractInstance.greet();
        for (i = 0; i < 5; i++) {
            $('.append-' + i).append("<p>" + callForInfo + "</p>");
            console.log(i);
        }
    })
};