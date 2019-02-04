# Execute your web3 abi encoding with abi.rawEncode([typesArray], [parameters]).toString('hex');</h1>
**NOTE: remember to add the .toString('hex') at the end**
**To use the application setup a static server with http-server dist/ and open the developer tools to execute the code**
Example:

```
abi.rawEncode(['uint256','string'], ['2345675643', 'Hello!']).toString('hex');

// Results in
000000000000000000000000000000000000000000000000000000008bd02b7b0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000648656c6c6f210000000000000000000000000000000000000000000000000000

// Remember to add your function signature from remix, for instance if your function is: function setMyNumber(uint256 _myNumber) then the signature will be
0x6ffd773c

// Combine both and you get the valid msg.data that you can use with delegatecall(msg.data)
0x6ffd773c000000000000000000000000000000000000000000000000000000008bd02b7b0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000648656c6c6f210000000000000000000000000000000000000000000000000000
```
