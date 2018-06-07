import React, { Component } from 'react';
import styles from '../styles.module.scss';

import { IconPlay, IconArrowRight } from 'Elements/Icons';
import Para from 'Elements/Para';


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

  showBanner = () => {

    const overview = this.props.overview
    const episode = this.props.episode

    if (this.props.episode === this.props.overview) {
      return <Para>Free Preview</Para>
    } else {
      return <Para><a href="https://itpro.tv/plans/">Join now to access this course &nbsp;<IconArrowRight className={ styles.arrow } /></a></Para>
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
        <div id="banner" className={ styles.banner }>{this.showBanner()}</div>
        <IconPlay className={ styles['play-button'] } />
      </div>
    );
  }
};

export default CourseVideo;
