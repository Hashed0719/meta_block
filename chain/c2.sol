// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;


contract Token {

    // public variables here
    string public token_name = "Harsh's Token"; 
    string public token_abbreviation = "HT"; 
    uint public total_supply = 0;

    // mapping variable here
    mapping(address => uint) public accounts;

    // mint function
    function minttoken(address _add, uint _value) public {
        total_supply += _value;
        accounts[_add] += _value;
    }

    // burn function
    function burntoken(address _add, uint _value) public {
        require(accounts[_add] >= _value, "Insufficient balance!");
        total_supply -= _value;
        accounts[_add] -= _value;
    }
}
