import React, { Component } from 'react';

import Hx from 'Elements/Hx';
import ButtonSwitch from 'Elements/ButtonSwitch';
import { Free, Premium, Standard } from 'Components/CardPlan';
import styles from './styles.module.scss';


class Plans extends Component {
  constructor(props) {
    super(props);

    this.state = {
      annual: {
        premium: {
          price: '857',
          billing1: 'Annual Billing',
          billing2: '(16% Discount)'
        },
        standard: {
          price: '570',
          billing1: 'Annual Billing',
          billing2: '(16% Discount)'
        },
        free: {
          price: '0'
        }
      },
      monthly: {
        premium: {
          price: '85.70',
          billing1: 'Month-to-Month Billing',
          billing2: '',
        },
        standard: {
          price: '57',
          billing1: 'Month-to-Month Billing',
          billing2: '',
        },
        free: {
          price: '0'
        }
      },
      currentPricing: {
        type: 'annual',
        premium: {
          price: '857',
          billing1: 'Annual Billing',
          billing2: '(16% Discount)'
        },
        standard: {
          price: '570',
          billing1: 'Annual Billing',
          billing2: '(16% Discount)'
        },
        free: {
          price: '0'
        }
      },
    };
  }

  handleClick = target => {
    const { annual, monthly } = this.state;
    let currentPricing = {};

    if (target === 'monthly') {
      currentPricing = { type: 'monthly', ...monthly };
    } else {
      currentPricing = { type: 'annual', ...annual };
    }

    this.setState({
      currentPricing
    });
  };

  render() {
    const { currentPricing } = this.state;

    return (
      <section className={ styles.container }>
        <header className={ styles.heading }>
          <Hx className={ styles.title } size="2">Start or Advance Your IT  Career Today</Hx>
          <ButtonSwitch className={ styles.switch } handleSwitch={ this.handleClick } />
        </header>

        <div className={ styles['card-plans'] }>
          <Premium info={ currentPricing } className={ styles.plan }/>
          <Standard info={ currentPricing } className={ styles.plan }/>
          <Free info={ currentPricing } className={ styles.plan }/>
        </div>
      </section>
    );
  }
};


export default Plans;
