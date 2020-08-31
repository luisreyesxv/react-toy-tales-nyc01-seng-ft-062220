import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'



class App extends React.Component{

  state = {
    display: false,
     newToy: {}
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  newToy = (toy) => {
    console.log("i'm in here", toy)
    this.setState({
    newToy: toy})
  }

  render(){
    return (
      <>
      
        <Header/>
        { this.state.display
            ?
          <ToyForm newToyHelper={this.newToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer newToys ={this.state.newToy}/>
      </>
    );
  }

}

export default App;
