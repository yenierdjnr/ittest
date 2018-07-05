import React, { Component } from 'react';

import styles from './styles.module.scss';


class ButtonSwitch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: 'monthly'
    };
  }

  handleClick = e => {
    const { handleSwitch } = this.props;
    const { isActive } = this.state;
    const target = e.target.innerHTML;

    if (isActive === target) {
      return;
    }

    this.setState({
      isActive: target
    });

    handleSwitch(target);
  }

  render() {
    const { className='' } = this.props;
    const { isActive } = this.state;
    let monthlyStyles = `${styles.monthly} ${styles.active}`;
    let annualStyles = styles.annual;

    if (isActive === 'annual') {
      annualStyles = `${styles.annual} ${styles.active}`;
      monthlyStyles = `${styles.monthly}`;
    }

    return (
      <div className={ `${styles.container} ${className}` }>
        <button className={ monthlyStyles } onClick={ this.handleClick }>monthly</button>
        <button className={ annualStyles } onClick={ this.handleClick }>annual</button>
      </div>
    );
  }
}


export default ButtonSwitch;
