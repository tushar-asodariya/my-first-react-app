import React from 'react';

import logo from './logo.svg';
import './App.css';
// import Item from './my_item.js'
class StarWars extends React.Component {

  constructor(){
  super()
    this.state = {name:null,height:null, homeworld:null, films:[]}
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.height} (cm)</p>
        <p>Homeworld : {this.state.homeworld}</p>
        <ul>
          <li>{this.state.films}</li>
        </ul>
        <button type="button" onClick={this.getNewCharacter} className="btn">Randomize Character</button>
      </div>

    );
  }

  getNewCharacter = ()=> {
    console.log('new char');
    this.setState( {name:"luke",height:"171", homeworld:"skdjf", films:["sdfsdf"]})
  }

}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <StarWars />
      </header>
    </div>
  );
}

export default App;
