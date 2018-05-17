import React, { Fragment, PureComponent } from 'react';

import Menu from './Menu';
import Display from './Display';
import styles from './styles.module.scss';


class Vlabs extends PureComponent {

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
    const { vLabs } = this.props;
    const { categoryIndex } = this.state;

    return (
      <Fragment>
        <Menu
          activeCategory={ categoryIndex }
          categories={ vLabs.map(lab => lab.vlabcategory) }
          onChange={ this.handleMenuChange }
        />
      <Display labs={ vLabs[categoryIndex].labs } />
      </Fragment>
    )
  }
}

export default Vlabs;
