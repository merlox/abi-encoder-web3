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
               abi.rawEncode(['uint256','string'], ['2345675643', 'Hello!%']).toString('hex');
            </pre>
         </div>
      )
   }
}

ReactDOM.render(
   <App />,
   document.querySelector('#root')
)
