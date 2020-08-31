import React, { Component } from 'react';

class ToyCard extends Component {



  updatesButton = () =>{
  this.props.updateHandler(this.props.id,{likes: (this.props.likes +1)})
  }

  deleteButton = () =>{
    this.props.deleteHandler(this.props.id)
    }

  render() {
    return (
      <div className="card">
        <h2>{this.props.name /* Toy's Name */}</h2>
        <img src={this.props.image /* Toy's Image */} alt={"marcus"} className="toy-avatar" />
        <p>{this.props.likes /* Toy's Likes */} Likes </p>
        <button className="like-btn" onClick={this.updatesButton}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.deleteButton}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
