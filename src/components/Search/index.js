import React, { PureComponent } from 'react';
import { navigateTo } from "gatsby-link"

import styles from './styles.module.scss';
import { IconSearch } from 'Elements/Icons';

class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: this.grabQueryParameter()
    };
  }

  grabQueryParameter = () => {
    const { location } = this.props;

    if (!location) {
      return '';
    }

    const search = location.search;
    const querySplit = search.split('=');
    const query = querySplit.length > 0 ? querySplit[1] : '';
    return query;
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
    const { value } = this.state;

    return (
      <form onSubmit={ this.handleSubmit } className={ `${className} ${styles.container}` }>
        <input
          onChange={ this.handleChange }
          className={ styles.input }
          type="text"
          placeholder="Search courses"
          value={ value }
        />
        <IconSearch onClick={ this.handleSubmit } className={ styles.icon }/>
      </form>
    );
  }
}

export default Search;
