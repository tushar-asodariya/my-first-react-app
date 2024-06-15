import React from "react";

class Item extends React.Component {

  constructor(props){
    super(props)

    this.state = {
    clicks:0
    }
  }

  render() {
    return (
    <div>
      <h1 onClick={this.onClickHelloWorld}>
        Hello World <small>This is {this.props.name}</small>
      </h1>
      <span>
      {this.state.clicks} is the number of clicks
      </span>
      </div>
    );
  }

  onClickHelloWorld(){
    console.log('Hello World is clicked');
    this.setState({
      clicks:this.state.clicks+1
    })
  }
}


export default Item;
