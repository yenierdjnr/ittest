import React, { Component } from 'react';
import styles from './styles.module.scss';

import Hx from 'Elements/Hx';
import ButtonSwitch from 'Elements/ButtonSwitch';
import { Free, Premium, Standard } from 'Components/CardPlan';


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
    const currentPricing = target === 'monthly' ? monthly : annual;

    this.setState({
      currentPricing
    });
  };

  render() {
    const { currentPricing } = this.state;

    return (
      <section className={ styles.container }>
        <header className={ styles.heading }>
          <Hx className={ styles.title } size="2">Start or advance your IT  career today.</Hx>
          <ButtonSwitch className={ styles.switch } handleSwitch={ this.handleClick } />
        </header>

        <div className={ styles['card-plans'] }>
          <Premium info={ currentPricing.premium } />
          <Standard info={ currentPricing.standard } />
          <Free info={ currentPricing.free } />
        </div>
      </section>
    );
  }
};


export default Plans;
