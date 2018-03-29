import React, { Component } from 'react';

import styles from './plans.module.scss';
import { Plans as Hero } from 'Components/Hero';
import { Pricing } from 'Components/Plans';
import Benefits from 'Components/Benefits';


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

  render () {
    const { currentPricing } = this.state;

    return (
      <main className={ styles['plans'] }>
        <section className={ styles.Hero }>
          <Hero handleSwitch={ this.handleClick }/>
        </section>

        <section className={ styles.Pricing }>
          <Pricing info={ currentPricing } />
        </section>

        <section className={ styles.Benefits }>
          <Benefits />
       </section>
      </main>
    );
  }
};


export default Plans;
