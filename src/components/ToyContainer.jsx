import React from 'react';
import ToyCard from './ToyCard'
import { render } from '@testing-library/react';

class ToyContainer extends React.Component {
  constructor (){
    super()
    this.state = {
      toys: []
    }
  }
  updateHandler = (id,data) => {
    let  options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    }
    
    fetch(`http://localhost:3001/toys/${id}`,options)
    .then(response => response.json())
    .then(toyObj => {
      let patchedToys = this.state.toys
      let index = patchedToys.findIndex((toy)=> toy.id === toyObj.id)
      patchedToys[index] = toyObj
      this.setState({...this.state,
        toys: patchedToys})
    })
  }


  deleteHandler = (id) => {
    let  options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }
    
    fetch(`http://localhost:3001/toys/${id}`,options)
    .then(response => response.json())
    .then(() => {
      let patchedToys = this.state.toys
      let index = patchedToys.findIndex((toy)=> toy.id === id)
      patchedToys.splice(index,1)
      this.setState({...this.state,
        toys: patchedToys})
    })
  }


  componentDidMount(){
    fetch("http://localhost:3001/toys")
    .then(response => response.json())
    .then( toys =>{
      let fixedToys = toys
      if (Object.keys(this.props.newToys).length > 0 ){
        fixedToys.push(this.props.newToys)
      }
      this.setState({...this.state,toys:fixedToys})
    }
    )}

    displayCards = () => {
      let fixedToys =this.state.toys
      if (Object.keys(this.props.newToys).length > 0 ){
        fixedToys.push(this.props.newToys)
      }
      return fixedToys.map((toy) => <ToyCard key={toy.id} id={toy.id} name={toy.name} image={toy.image} likes={toy.likes}  updateHandler = {this.updateHandler} deleteHandler={this.deleteHandler} />)
    }






  render(){
  return(
    <div id="toy-collection">
      {this.displayCards()}
    </div>
  );
  }
}

export default ToyContainer;
