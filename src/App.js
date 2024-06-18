import React from 'react';

import logo from './logo.svg';
import './App.css';
// import Item from './my_item.js'
import FilmItemRow from './film_item_row';
class StarWars extends React.Component {

  constructor() {
    super()
    this.state = { name: null, height: null, homeworld: null, films: [], loadedCharacter: false }
  }
  render() {

    const movies = this.state.films.map((filmName, i) => {

      return <FilmItemRow key={i} name={filmName} />


    })
    return (
      <div >
        {
          this.state.loadedCharacter &&
          <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.height} (cm)</p>
            <p>Homeworld: {this.state.homeworld}</p>
            <p>Films: </p>
            <ul>
              {
                movies
              }
            </ul>
          </div>
        }

        <button type="button" onClick={this.getNewCharacter} className="btn">Randomize Character</button>
      </div>

    );
  }

  getNewCharacter = () => {
    const randomNumber = Math.round(Math.random() * 82)
    const url = `https://swapi.dev/api/people/${randomNumber}`
    fetch(url).then(response => response.json()).then(data => {

      fetch(data.homeworld).then(homeResp => homeResp.json()).then(async homeData => {


        const filmNameResponses = await Promise.all(data.films.map(filmUrl => {

          return fetch(filmUrl).then(resp => resp.json())

        }))
        let filmNames = []
        filmNameResponses.map(filmName => {
          filmNames.push(filmName.title)

        }

        )
        this.setState({
          name: data.name, height: data.height, homeworld: homeData.name,
          films: filmNames,
          loadedCharacter: true
        })



      })


    })
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
