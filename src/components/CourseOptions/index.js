import React, { Fragment, PureComponent } from 'react';

import Menu from './Menu';
import Display from './Display';


class CourseOptions extends PureComponent {

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
    const { tagCategories } = this.props;
    const { categoryIndex } = this.state;

    return (
      <Fragment>
        <Menu
          activeCategory={ categoryIndex }
          categories={ tagCategories.map((tag) => tag.tagcategoryname) }
          onChange={ this.handleMenuChange }
        />
        <Display categories={ tagCategories[categoryIndex].tags } />
      </Fragment>
    )
  }
}

export default CourseOptions;
