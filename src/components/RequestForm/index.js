import React, { Component } from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Button from 'Elements/Button';


class RequestForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange = e => {
    console.log('request form handle change', e);
  }

  render() {
    return (
      <section className={ styles.container }>
        <Hx color={ styles.offBlack } size="3" className={ styles['form-title'] }>Need pricing, demo,  or trial? Get in touch!</Hx>

        <form action="">
          <div className={ styles['about-you']}>
            <input className={ styles.item } type="text" placeholder="First Name*" />
            <input className={ styles.item } type="text" placeholder="Last Name*" />
            <input className={ styles.item } type="email" placeholder="Email*" />
            <input className={ styles.item } type="text" placeholder="Company*" />
            <input className={ styles.item } type="tel" placeholder="Phone*" />

            <select className={ `${styles.item} ${styles.selector}` }
              value={ this.state.value }
              onChange={ this.handleChange }>
              <option value="">Region*</option>
              <option value="northamerica">North America</option>
              <option value="emea">EMEA</option>
              <option value="asiaPacific">Asia Pacific</option>
              <option value="latinAmerica">Latin America</option>
            </select>
          </div>

          <div className={ styles['your-needs']}>
            <div className={ styles['question-box']}>
              <span className={ styles.question }>Would you like a live demo of ITProTV?*</span>
              <div className={ styles['radio-list']}>
                <input id="r1" className={ styles.radio } type="radio" name="live-demo" value="yes" /><label className={ styles.label } htmlFor="r1">Yes</label>
                <input id="r2" className={ styles.radio } type="radio" name="live-demo" value="no" /><label className={ styles.label } htmlFor="r2">No</label>
              </div>
            </div>

            <textarea className={ styles.textarea } name="needs" placeholder="Tell us about your company’s training needs." />
          </div>

          <Button>send request</Button>
        </form>
      </section>
    );
  }
};


export default RequestForm;
