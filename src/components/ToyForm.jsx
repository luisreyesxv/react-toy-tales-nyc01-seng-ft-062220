import React, { Component } from 'react';

class ToyForm extends Component {

  constructor(){
    super()
    this.state = {
      name: "",
      image: ""
    }

    
  }
      changeHandler = (event) => {
        this.setState( {
          ...this.state,
          [event.target.name]: event.target.value})
      }

      submitHandler = (event)=>{
        event.preventDefault()
        this.postFunction({name:this.state.name,image: this.state.image})
        
        this.setState({
          name: "",
          image: ""
        })
      }


      postFunction = (toy) =>{
       let  options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({name: toy.name, image: toy.image, likes: 0})
        }
        
        fetch("http://localhost:3001/toys",options)
        .then(response => response.json())
        .then(toyObj => {
          console.log(toyObj,"luis")
          this.props.newToyHelper(toyObj)
          
        })

      }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit= {this.submitHandler}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" onChange ={this.changeHandler} value ={this.state.name}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" onChange ={this.changeHandler} value ={this.state.image}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
