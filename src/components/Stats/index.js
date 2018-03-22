import React, { Component } from 'react';
import CountUp, { startAnimation } from 'react-countup';

import styles from './styles.module.scss';


class Stats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasAnimated: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  isInViewport = element => {
    let rect = element.getBoundingClientRect();
    let html = document.documentElement;

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  };

  handleScroll = e => {
    const content = document.getElementsByClassName('content')[0];

    if (content && !this.state.hasAnimated) {
      if (this.isInViewport(content)) {
        startAnimation(this.refs.content);
        startAnimation(this.refs.certs);
        startAnimation(this.refs.comm);

        this.setState({
          hasAnimated: true
        });
      }
    }
  };

  render() {
    return (
      <div className={ styles.container }>
        <div className={ styles.left }>
          <CountUp
            ref="content"
            className={ `${styles.num} content` }
            start={0}
            end={3300}
            duration={2.75}
            useEasing={true}
            useGrouping={true}
            separator=","
           />
          <p className={ styles.summary}>hours of content with new content added daily</p>
        </div>
        <div className={ styles.center }>
          <CountUp
            ref="certs"
            className={ `${styles.num} certs` }
            start={0}
            end={288}
            duration={2.75}
            useEasing={true}
            useGrouping={true}
            separator=","
           />
          <p className={ styles.summary}>combined certifications held by ITProTV edutainers</p>
        </div>
        <div className={ styles.right }>
          <CountUp
            ref="comm"
            className={ `${styles.num} comm` }
            start={0}
            end={90000}
            duration={2.75}
            useEasing={true}
            useGrouping={true}
            separator=","
           />
          <p className={ styles.summary}>members of the ITProTV learning community</p>
        </div>
      </div>
    );
  }
};


export default Stats;
