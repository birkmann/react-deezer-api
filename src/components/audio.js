import React from "react";

function PlayButton(props) {
  const className = props.isMusicPlaying ? "play active" : "play";
  return (
    <span
      onClick={props.onClick}
      title="Play video"
      className={className}
    ></span>
  );
}

class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMusicPlaying: false };
  }
  handleClick() {
    if (this.state.isMusicPlaying) {
      //this.audio.pause();
    } else {
      //this.audio.play();
    }
    this.setState(prevState => {
      return {
        isMusicPlaying: !prevState.isMusicPlaying
      };
    });
  }

  render() {
    // const status = this.state.isMusicPlaying ? "Playing" : "Not playing :(";
    return (
      <div>
        <PlayButton
          onClick={this.handleClick.bind(this)}
          isMusicPlaying={this.state.isMusicPlaying}
        />
        <p>{this.props.preview}</p>
        <audio id="audio" src={this.props.preview} />
      </div>
    );
  }
}

export default Audio;
