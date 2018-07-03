import React, { Component } from 'react';
import CountUp, { startAnimation } from 'react-countup';

import styles from './styles.module.scss';


class Stats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasAnimated: false,
      intervalId: ''
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.clearInterval(this.state.intervalId);
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

  triggerInterval = () => {
    return setInterval(function() {
      const comm = document.getElementsByClassName('comm')[0];

      if (comm && this.isInViewport(comm)) {
        let num = comm.innerHTML.replace(',', '');
        let countUp = parseInt(num) + 1;

        const len = `${countUp}`.length;
        const front = `${countUp}`.substring(0, 3);
        const back = `${countUp}`.substring(3, len);

        comm.innerHTML = `${front},${back}`;
      }
    }.bind(this), 5000);
  }

  onComplete = () => {
    const _id = this.triggerInterval();
    this.setState({
      intervalId: _id
    });
  };

  render() {
    return (
      <div className={ styles.capsule }>
        <div className={ styles.statsRow }>
          <div className={ styles.left }>
            <CountUp
              ref="content"
              className={ `${styles.num} content` }
              start={3800}
              end={4000}
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
              start={88}
              end={288}
              duration={2.75}
              useEasing={true}
              useGrouping={true}
              separator=","
             />
            <p className={ styles.summary}>combined certifications held by ITProTV Edutainers</p>
          </div>
          <div className={ styles.right }>
            <CountUp
              ref="comm"
              className={ `${styles.num} comm` }
              start={99800}
              end={100000}
              duration={2.75}
              useEasing={true}
              useGrouping={true}
              separator=","
              onComplete={this.onComplete}
             />
            <p className={ styles.summary}>members of the ITProTV learning community</p>
          </div>
        </div>
      </div>
    );
  }
};


export default Stats;
