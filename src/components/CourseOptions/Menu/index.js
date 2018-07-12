import React, { Component } from 'react';

import styles from './styles.module.scss';


class Menu extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (index) => (e) => {
    this.props.onChange(index);
  };

  render() {
    const { className='', categories=[], activeCategory } = this.props;

    return (
      <section className={ `${className} ${styles.capsule}` }>
        <div className={ styles.row }>
          <div className={ styles.cols }>
            <ul className={ styles.list }>
              {categories.map((category, index) => 
                <li
                  key={category}
                  className={ `${styles.item} ${activeCategory == index && styles.active}`}
                  onClick={ this.handleClick(index) }
                >
                  <span>{category}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}


export default Menu;
