import React from "react";

class Item extends React.Component {
  render() {
    return (
      <h1 onClick={this.onClickHelloWorld}>
        Hello World <small>This is {this.props.name}</small>
      </h1>
    );
  }

  onClickHelloWorld(){
    console.log('Hello World is clicked');
  }
}

export default Item;
