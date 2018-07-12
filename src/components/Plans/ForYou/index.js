import React, { Component } from 'react';

import Hx from 'Elements/Hx';
import ButtonSwitch from 'Elements/ButtonSwitch';
import { FreeForYou, PremiumForYou, StandardForYou } from 'Components/CardPlan';
import styles from './styles.module.scss';


class Plans extends Component {
  constructor(props) {
    super(props);

    this.state = {
      annual: {
        premium: {
          price: '857',
          term: 'year',
          billing1: 'Annual Billing',
          billing2: '(16% Discount)'
        },
        standard: {
          price: '570',
          term: 'year',
          billing1: 'Annual Billing',
          billing2: '(16% Discount)'
        },
        free: {
          price: '0',
          term: 'year'
        }
      },
      monthly: {
        premium: {
          price: '85.70',
          term: 'month',
          billing1: 'Month-to-Month Billing',
          billing2: '',
        },
        standard: {
          price: '57',
          term: 'month',
          billing1: 'Month-to-Month Billing',
          billing2: '',
        },
        free: {
          price: '0',
          term: 'month'
        }
      },
      currentPricing: {
        type: 'monthly',
        premium: {
          price: '85.70',
          term: 'month',
          billing1: 'Month-to-Month Billing',
          billing2: '',
        },
        standard: {
          price: '57',
          term: 'month',
          billing1: 'Month-to-Month Billing',
          billing2: '',
        },
        free: {
          price: '0',
          term: 'month'
        }
      },
    };
  }

  handleClick = (target) => {
    const { monthly, annual } = this.state;
    let currentPricing = {};

    if (target === 'annual') {
      currentPricing = { type: 'annual', ...annual };
    } else {
      currentPricing = { type: 'monthly', ...monthly };
    }

    this.setState({
      currentPricing
    });
  };

  render() {
    const { currentPricing } = this.state;

    return (
      <section className={ styles.capsule }>
        <div className={ styles.headerContainer }>
          <div className={ styles.row }>
            <header className={ styles.heading }>
              <Hx className={ styles.title } size="2">Start or Advance Your IT Career Today</Hx>
              <ButtonSwitch className={ styles.switch } handleSwitch={ this.handleClick } />
            </header>
          </div>
        </div>
        <div className={ styles.cardContainer }>
          <div className={ styles['card-plans'] }>
            <PremiumForYou info={ currentPricing } className={ styles.plan }/>
            <StandardForYou info={ currentPricing } className={ styles.plan }/>
            <FreeForYou info={ currentPricing } className={ styles.plan }/>
          </div>
        </div>
      </section>
    );
  }
}


export default Plans;
