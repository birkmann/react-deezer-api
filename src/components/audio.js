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
      //console.log(this.props.preview);
      console.log(this);
      this.myAudio.pause();
    } else {
      //this.audio.play();
      //console.log(this.props.preview);
      //this.props.preview.play();
      console.log(this);
      this.myAudio.play();
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
        <audio
          ref={audio => {
            this.myAudio = audio;
          }}
        >
          <source src={this.props.preview} type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}

export default Audio;
