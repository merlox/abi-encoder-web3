import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import abi from 'ethereumjs-abi'

window.abi = abi

class App extends React.Component {
   constructor(props){
      super(props)

      if(typeof web3 != 'undefined'){
         console.log("Using web3 detected from external source like Metamask")
         this.web3 = new Web3(web3.currentProvider)
      }else{
         console.log("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
         this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
      }
   }

   render(){
      return (
         <div className="main-container">
            <h1>Execute your web3 abi encoding with abi.rawEncode([typesArray], [parameters]).toString('hex');</h1>
            <p>NOTE: the .toString('hex') at the end</p>
            <p>Example:</p>
            <pre>
               abi.rawEncode(['uint256','string'], ['2345675643', 'Hello!']).toString('hex');
            </pre>
            <br/>
            <pre>
               // Results in
               000000000000000000000000000000000000000000000000000000008bd02b7b0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000648656c6c6f210000000000000000000000000000000000000000000000000000
            </pre>
            <br/>
            <pre>
               // Remember to add your function signature from remix, for instance if your function is: function setMyNumber(uint256 _myNumber) then the signature will be
               0x6ffd773c
           </pre>
           <br/>
           <pre>
               // Combine both and you get the valid msg.data that you can use with delegatecall(msg.data)
               0x6ffd773c000000000000000000000000000000000000000000000000000000008bd02b7b0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000648656c6c6f210000000000000000000000000000000000000000000000000000
            </pre>
         </div>
      )
   }
}

ReactDOM.render(
   <App />,
   document.querySelector('#root')
)
