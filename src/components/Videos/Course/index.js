import React, { Component } from 'react';
import styles from '../styles.module.scss';

import { IconPlay } from 'Elements/Icons';


class CourseVideo extends Component {
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
    const courseiFrame = styles['course-iframe'];

    if (vidWrap) {
      vidWrap.innerHTML = `<iframe class="${courseiFrame}" src="https://player.vimeo.com/video/${this.props.vimeoId}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`;
      playButton.style.display = 'none';

      this.setState({
        showOpacity: styles['vidwrap-opacity']
      });
    }
  };

  render() {
    const { showOpacity } = this.state;

    return (
      <div id="background-video" className={ styles['course-container'] } onClick={ this.handlePlay }>
        <img className={ styles.thumbnail } src={ this.props.thumbnail } width="100%" />
        <img className={ styles.thumbnailMed } src={ this.props.thumbnailMed } width="100%" />
        <img className={ styles.thumbnailSm } src={ this.props.thumbnailSm } width="100%" />
        <div id="vidwrap" className={ `${styles.courseVidwrap} ${showOpacity}` }></div>
        <IconPlay className={ styles['play-button'] } />
      </div>
    );
  }
};

export default CourseVideo;
