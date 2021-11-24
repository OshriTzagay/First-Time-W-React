import React from "react";

class Name extends React.Component {
  render() {
    return (
      <div>
        <h2>
          {this.props.name},{this.props.age}
        </h2>
      </div>
    );
  }
}
export default Name;