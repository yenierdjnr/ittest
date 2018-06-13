import React, { Component } from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Button from 'Elements/Button';


class RequestForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitting: false,
      success: false,
      error: false,
      form: {
        pardot_email: '',
        pardot_firstName: '',
        pardot_lastName: '',
        pardot_company: '',
        pardot_phone: '',
        pardot_region: '',
        pardot_demo: 'yes',
        pardot_comments: ''
      }
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ submitting : true })

    fetch('https://go.itpro.tv/l/425902/2018-02-28/86q1kh', {
      method: 'POST',
      body: JSON.stringify(this.state.form),
      mode: 'no-cors',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(() => {
      this.setState({
        success: true,
        error: false
      })
    }).catch(() => {
      this.setState({
        success: false,
        error: true
      })
    });
  }

  handleInput = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  render() {
    const {
      form: {
        pardot_email, pardot_firstName, pardot_lastName,
        pardot_company, pardot_phone, pardot_region,
        pardot_demo, pardot_comments
      },
      submitting, success
    } = this.state;
    const { className='' } = this.props;
    const buttonClass = success ? styles.buttonSuccess : '';

    return (
      <section className={ `${styles.container} ${className}` }>
        <Hx color={ styles.offBlack } size="3" className={ styles['form-title'] }>Need pricing, demo, or trial? Get in touch!</Hx>

        <form onSubmit={this.handleSubmit}>
          <div className={ styles['about-you']}>
            <input
              className={ styles.item }
              type="text"
              value={ pardot_firstName }
              name="pardot_firstName"
              placeholder="First Name*"
              onChange={ this.handleInput }
              disabled={ submitting }
            />
            <input
              className={ styles.item }
              type="text"
              value={ pardot_lastName }
              name="pardot_lastName"
              placeholder="Last Name*"
              onChange={ this.handleInput }
              disabled={ submitting }
            />
            <input
              className={ styles.item }
              type="email"
              value={ pardot_email }
              name="pardot_email"
              placeholder="Email*"
              onChange={ this.handleInput }
              disabled={ submitting }
            />
            <input
              className={ styles.item }
              type="text"
              value={ pardot_company }
              name="pardot_company"
              placeholder="Company*"
              onChange={ this.handleInput }
              disabled={ submitting }
            />
            <input
              className={ styles.item }
              type="tel"
              value={ pardot_phone }
              name="pardot_phone"
              placeholder="Phone*"
              onChange={ this.handleInput }
              disabled={ submitting }
            />

            <select
              className={ `${styles.item} ${styles.selector}` }
              disabled={ submitting }
              name="pardot_region"
              value={ pardot_region }
              onChange={ this.handleInput }
            >
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
                <input id="r1" className={ styles.radio } type="radio" name="pardot_demo" value="yes" checked={ pardot_demo === 'yes' } onChange={ this.handleInput } disabled={ submitting } />
                <label className={ styles.label } htmlFor="r1">Yes</label>
                <input id="r2" className={ styles.radio } type="radio" name="pardot_demo" value="no" checked={ pardot_demo === 'no' } onChange={ this.handleInput } disabled={ submitting } />
                <label className={ styles.label } htmlFor="r2">No</label>
              </div>
            </div>

            <textarea
              className={ styles.textarea }
              name="pardot_comments"
              value={ pardot_comments }
              placeholder="Tell us about your company’s training needs."
              onChange={ this.handleInput }
              disabled={ submitting }
            />
          </div>

          <Button
            className={ `${styles.button} ${buttonClass}` }
            disabled={ submitting || success }
          >
            {!success && `send request`}
            {success && `Request received. Thank you!`}
          </Button>
        </form>
      </section>
    );
  }
};


export default RequestForm;
