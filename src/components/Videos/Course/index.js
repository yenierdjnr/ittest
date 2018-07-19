import React, { Component } from 'react';
import styles from '../styles.module.scss';

import { IconArrowRight, IconPlay } from 'Elements/Icons';
import Hx from 'Elements/Hx';


class CourseVideo extends Component {

  handlePlay = (e) => {

    const overview = this.props.overview;
    const episode = this.props.episode;
    const vidWrap = document.getElementById('vidwrap');
    const playButton = document.getElementsByClassName(styles.playButton)[0];
    const courseiFrame = styles.courseIframe;

    if (vidWrap && episode === overview) {
      vidWrap.innerHTML = `<iframe class="${courseiFrame}" src="https://player.vimeo.com/video/${this.props.vimeoId}?autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`;
      playButton.style.display = 'none';
    } if (vidWrap && !overview) {
      vidWrap.innerHTML = ``;
    }
  };

  showBanner = () => {

    const overview = this.props.overview;
    const episode = this.props.episode;

    if (episode === overview) {
      return <Hx size="6" className={ styles.bannerText }>Free Preview</Hx>
    } else {
      return <Hx size="6" className={ styles.bannerText }><a href={ `${process.env.SELF_URL}/plans/` }>Join now to access this course <IconArrowRight className={ styles.arrow } /></a></Hx>
    }
  };

  render() {

    return (
      <div id="background-video" className={ styles.courseCapsule } onClick={ this.handlePlay }>
        <img className={ styles.thumbnail } src={ this.props.thumbnail } width="100%" alt="" />
        <img className={ styles.thumbnailMed } src={ this.props.thumbnailMed } width="100%" alt="" />
        <img className={ styles.thumbnailSm } src={ this.props.thumbnailSm } width="100%" alt="" />
        <div id="vidwrap" className={styles.courseVidwrap}></div>
        <div id="banner" className={ styles.banner }>{this.showBanner()}</div>
        { this.props.episode === this.props.overview && <IconPlay className={ styles.playButton } />}
      </div>
    );
  }
}

export default CourseVideo;
