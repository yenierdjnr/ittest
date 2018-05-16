import React, { Fragment, PureComponent } from 'react';

import Menu from './Menu';
import Display from './Display';
import styles from './styles.module.scss';


class GettingCertified extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      categoryIndex: 0
    }
  }

  handleMenuChange = (categoryIndex) => {
    if (this.state.categoryIndex !== categoryIndex) {
      this.setState({
        categoryIndex
      });
    }
  }

  render() {
    const { getCertified } = this.props;
    const { categoryIndex } = this.state;

    return (
      <Fragment>
        <Menu
          activeCategory={ categoryIndex }
          categories={ getCertified.map(cert => cert.certcategory) }
          onChange={ this.handleMenuChange }
        />
      <Display resources={ getCertified[categoryIndex].resources } />
      </Fragment>
    )
  }
}

export default GettingCertified;
