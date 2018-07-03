import React, { Component } from 'react';

import styles from './styles.module.scss';


class ButtonSwitch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: 'annual'
    };
  }

  handleClick = (e) => {
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
    let annualStyles = `${styles.annual} ${styles.active}`;
    let monthlyStyles = styles.monthly;

    if (isActive === 'monthly') {
      monthlyStyles = `${styles.monthly} ${styles.active}`;
      annualStyles = `${styles.annual}`;
    }

    return (
      <div className={ `${styles.container} ${className}` }>
        <button className={ annualStyles } onClick={ this.handleClick }>annual</button>
        <button className={ monthlyStyles } onClick={ this.handleClick }>monthly</button>
      </div>
    );
  }
}


export default ButtonSwitch;
