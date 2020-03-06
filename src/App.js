import React from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      music: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    let URL =
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=" +
      e.target.elements.query.value;
    axios
      .get(URL, {
        params: {},
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "11ac06fc98msh86af0af3fa4e186p103fc8jsne419fad287e9"
        }
      })
      .then(res => {
        console.log(res.data.data);
        const music = res.data.data;
        this.setState({ music });
      });
  };

  render() {
    return (
      <div>
        <div className="emotion"></div>
        <div className="container">
          <img src={logo} alt="Logo" className="logo" />
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Song, Artist, Album" name="query" />
          </form>
          <ul className="results">
            {this.state.music.map((music, index) => (
              <li key={index}>
                <div className="left">
                  <img src={music.album.cover_big} alt="cover" />
                </div>
                <div className="right">
                  <div className="title">{music.title_short}</div>
                  <div className="artist">
                    <span>Artist: </span>
                    {music.artist.name}
                  </div>
                  <div className="album">
                    <span>Album: </span>
                    {music.album.title}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
