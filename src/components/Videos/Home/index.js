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

  handlePlay = e => {
    if (this.state.showOpacity) {
      return;
    }

    const vidWrap = document.getElementById('vidwrap');
    const playButton = document.getElementsByClassName(styles['play-button'])[0];
    const homeiFrame = styles['home-iframe'];

    if (vidWrap) {
      vidWrap.innerHTML = `<iframe class="${homeiFrame}" src="https://www.youtube.com/embed/ADZ7FZBh4B4?rel=0&amp;modestbranding=1&amp;autoplay=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>`;
      playButton.style.display = 'none';

      this.setState({
        showOpacity: styles['vidwrap-opacity']
      });
    }
  };

  render() {
    const { showOpacity } = this.state;

    return (
      <div id="background-video" className={ styles['home-container'] } onClick={ this.handlePlay }>
        <div id="vidwrap" className={ `${styles.vidwrap} ${showOpacity}` }></div>
        <IconPlay className={ styles['play-button'] } />
      </div>
    );
  }
};


export default HomeVideo;
