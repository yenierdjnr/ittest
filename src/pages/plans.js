import React, { Component } from 'react';
import Layout from 'Components/layout';

import Head from 'Components/Head';
import { Plans as Hero } from 'Components/Hero';
import { Pricing } from 'Components/Plans';
import Benefits from 'Components/Benefits';
import styles from './plans.module.scss';


class Plans extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monthly: {
        premium: {
          price: '85.70',
          term: 'month',
          billing1: 'Month-to-Month Billing',
          billing2: ''
        },
        standard: {
          price: '57',
          term: 'month',
          billing1: 'Month-to-Month Billing',
          billing2: ''
        },
        free: {
          price: '0',
          term: 'month'
        }
      },
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
      currentPricing: {
        type: 'monthly',
        premium: {
          price: '85.70',
          term: 'month',
          billing1: 'Month-to-Month Billing',
          billing2: ''
        },
        standard: {
          price: '57',
          term: 'month',
          billing1: 'Month-to-Month Billing',
          billing2: ''
        },
        free: {
          price: '0',
          term: 'month'
        }
      },
    };
  }

  handleClick = (target) => {
    const { annual, monthly } = this.state;

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

  render () {
    const { location } = this.props;
    const { currentPricing } = this.state;

    return (
      <Layout location={ location }>
        <Head location={ location }/>
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
      </Layout>
    );
  }
}


export default Plans;
