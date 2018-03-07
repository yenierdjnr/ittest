import React, { Component } from 'react';

import styles from './styles.module.scss';


class Menu extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = e => {
    const item = e.currentTarget;
    const menu = item.parentElement;
    const active = menu.querySelector(`.${styles.active}`);

    active.classList.remove(styles.active);
    item.classList.add(styles.active);
  };

  render() {
    const { className='' } = this.props;

    return (
      <section className={ `${className} ${styles.container}` }>
        <ul className={ styles.list }>
          <li className={ `${styles.item} ${styles.active}` } onClick={ this.handleClick }><span>categories</span></li>
          <li className={ styles.item } onClick={ this.handleClick }><span>certification</span></li>
          <li className={ styles.item } onClick={ this.handleClick }><span>job roles</span></li>
        </ul>
      </section>
    );
  }
};


export default Menu;
