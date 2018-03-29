import React, { PureComponent } from 'react';
import { navigateTo } from "gatsby-link"

import styles from './styles.module.scss';
import { IconSearch } from 'Elements/Icons';

export default class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { value } = this.state;

    if (value) {
      navigateTo(`/search/?q=${value}`)
    }
  }

  render() {
    const { className='' } = this.props;

    return (
      <form onSubmit={ this.handleSubmit } className={ `${className} ${styles.container}` }>
        <input
          onChange={ this.handleChange }
          className={ styles.input }
          type="text"
          placeholder="Search courses"
        />
        <IconSearch onClick={ this.handleSubmit } className={ styles.icon }/>
      </form>
    );
  }
}
