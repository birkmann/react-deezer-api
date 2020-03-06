import React from "react";
import ReactDOM from "react-dom";

class Audio extends React.Component {
  handleClick = e => {
    //console.log(this.props.src);
    let audioHtml = `
        <audio controls>
            <source src=${this.props.preview} type="audio/mpeg" />
        </audio>`;
    let itemClass = "item-" + this.props.itemid;
    console.log(itemClass);

    //document.getElementsByClassName(itemClass).innerHTML = "text";

    ReactDOM.findDOMNode(this).innerHTML = audioHtml;
  };

  render() {
    return (
      <div>
        <div className={"item-" + this.props.itemid}></div>
        <button onClick={this.handleClick}>Play</button>
      </div>
    );
  }
}

export default Audio;
