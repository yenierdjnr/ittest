import React, { PureComponent } from 'react';

import styles from './styles.module.scss';
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
    if(this.state.categoryIndex !== categoryIndex) {
      this.setState({
        categoryIndex
      });
    }
  }

  render() {
    const { tagCategories } = this.props;
    const { categoryIndex } = this.state;
    return (
      <section className={ styles.container }>
        <Menu
          activeCategory={categoryIndex}
          categories={tagCategories.map(tag => tag.tagcategoryname)}
          onChange={this.handleMenuChange}
        />
      <Display categories={tagCategories[categoryIndex].tags} />
      </section>
    )
  }
}

export default CourseOptions;
