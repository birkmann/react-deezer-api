import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      music: []
    };
  }

  /*
  componentDidMount() {
    let URL = "https://deezerdevs-deezer.p.rapidapi.com/search?q=the+doors";
    axios
      .get(URL, {
        params: {},
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "11ac06fc98msh86af0af3fa4e186p103fc8jsne419fad287e9"
        }
      })
      .then(res => {
        const music = res.data.data;
        this.setState({ music });
        console.log(music);
      });
  }
  */

  //handleSubmit(e)
  handleSubmit = e => {
    e.preventDefault();

    //let URL = "https://deezerdevs-deezer.p.rapidapi.com/search?q=the+doors";
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
      <div className="App">
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Song, Artist, Album" name="query" />
            <button>Search</button>
          </form>
          <div id="ajax-results"></div>
        </div>
        <ul>
          {this.state.music.map((music, index) => (
            <li key={index}>
              <img src={music.album.cover_big} alt="cover" />
              <h2>{music.title}</h2>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
