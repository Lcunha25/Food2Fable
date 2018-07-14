pragma solidity ^0.4.18;
// We have to specify what version of compiler this code will compile with
contract farmInformation         // The contract definition. A constructor of the same name will be automatically called on contract creation. 
{
    address creator;     // At first, an empty "address"-type variable of the name "creator". Will be set in the constructor.
    string greeting;     // At first, an empty "string"-type variable of the name "greeting". Will be set in constructor and can be changed.

    function farmInformation(string _greeting) public   // The constructor. It accepts a string input and saves it to the contract's "greeting" variable.
    {
        creator = msg.sender;
        greeting = _greeting;
    }

    function greet() constant returns (string)          
    {
        return greeting;
    }
    
    function getBlockNumber() constant returns (uint) // this doesn't have anything to do with the act of greeting
    {													// just demonstrating return of some global variable - can be used to track products as QR code.
        return block.number;
    }
    
    function setGreeting(string _newgreeting) 
    {
        greeting = _newgreeting;
    }
}