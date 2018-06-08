import React, { Component } from 'react';
import styles from '../styles.module.scss';

import { IconPlay, IconArrowRight } from 'Elements/Icons';
import Hx from 'Elements/Hx';


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

    const overview = this.props.overview;
    const episode = this.props.episode;
    const vidWrap = document.getElementById('vidwrap');
    const playButton = document.getElementsByClassName(styles['play-button'])[0];
    const courseiFrame = styles['course-iframe'];

    if (vidWrap && (episode === overview)) {
      vidWrap.innerHTML = `<iframe class="${courseiFrame}" src="https://player.vimeo.com/video/${this.props.vimeoId}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`;
      playButton.style.display = 'none';

      this.setState({
        showOpacity: styles['vidwrap-opacity']
      });
    } if (vidwrap && !overview) {
      vidWrap.innerHTML = ``;
    }
  };

  showBanner = () => {

    const overview = this.props.overview;
    const episode = this.props.episode;

    if (episode === overview) {
      return <Hx size="6" className={ styles.bannerText }>Free Preview</Hx>
    } else {
      return <Hx size="6" className={ styles.bannerText }><a href="https://itpro.tv/plans/">Join now to access this course &nbsp;<IconArrowRight className={ styles.arrow } /></a></Hx>
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
        <div id="banner" className={ styles.banner }>{this.showBanner()}</div>
      </div>
    );
  }
};

export default CourseVideo;
