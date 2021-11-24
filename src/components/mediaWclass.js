import React from "react";

class MediaWithClass extends React.Component {
  render() {
    return (
      <div>
        <video src={this.props.video}controls></video>
      </div>
    );
  }
}
export default MediaWithClass;
