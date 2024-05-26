// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

contract helloWorld {
    string myString = "Hello world!";
    int myint = -1;
    uint myuint = 0;
    bool mybool;

    function setString(string memory _mystr) public {
        myString = _mystr;
    }

    function getString() public view returns(string memory _mystring) {
        return myString;
    }


    function setint(int _int) public {
        myint = _int;
    }

    function getint() public view returns(int someint){
        return myint;
    }


    function setuint(uint _uint) public {
        myuint = _uint;
    }

    function getuint() public view returns(uint someint){
        return myuint;
    }


    function setbool(bool _bool) public {
        mybool = _bool;
    }

    function getbool() public view returns(bool someint){
        return mybool;
    }


}
