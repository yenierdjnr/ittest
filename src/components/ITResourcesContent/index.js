import React, { Fragment, PureComponent } from 'react';

import Menu from './Menu';
import Display from './Display';

class ITResourcesContent extends PureComponent {

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
    const { itResources } = this.props;
    const { categoryIndex } = this.state;

    return (
      <Fragment>
        <Menu
          activeCategory={ categoryIndex }
          categories={ itResources.map((itresource) => itresource.itresourcecategory) }
          onChange={ this.handleMenuChange }
        />
        <Display resources={ itResources[categoryIndex].resources } />
      </Fragment>
    )
  }
}

export default ITResourcesContent;
