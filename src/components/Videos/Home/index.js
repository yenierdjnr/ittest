import React, { Component } from 'react';
import styles from '../styles.module.scss';

import { IconPlay } from 'Elements/Icons';


class HomeVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showOpacity: ''
    };
  }

  handlePlay = (e) => {
    if (this.state.showOpacity) {
      return;
    }

    const vidWrap = document.getElementById('vidwrap');
    const playButton = document.getElementsByClassName(styles.playButton)[0];
    const homeiFrame = styles.homeIframe;

    if (vidWrap) {
      vidWrap.innerHTML = `<iframe class="${homeiFrame}" src="https://www.youtube.com/embed/FngYJxFmmnw?rel=0&amp;modestbranding=1&amp;autoplay=1&amp;controls=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>`;
      playButton.style.display = 'none';

      this.setState({
        showOpacity: styles.vidwrapOpacity
      });
    }
  };

  render() {
    const { showOpacity } = this.state;

    return (
      <div id="background-video" className={ styles.homeCapsule } onClick={ this.handlePlay }>
        <div id="vidwrap" className={ `${styles.vidwrap} ${showOpacity}` }></div>
        <IconPlay className={ styles.playButton } />
      </div>
    );
  }
}


export default HomeVideo;
