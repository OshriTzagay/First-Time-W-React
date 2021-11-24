import React from "react";

class Worker extends React.Component {
  render() {
    return (
      //  <div className="container">
      <div id="cards">
        <img className="cardsImgs" src={this.props.img}></img>
        <h3 className="cardNames">{this.props.name}</h3>
        <h5 className="cardsInfo">{this.props.info}</h5>
      </div>
    );
  }
}
export default Worker;
