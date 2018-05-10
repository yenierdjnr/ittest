import React, { Component } from 'react';

import Hx from 'Elements/Hx';
import { Category } from 'Elements/Flags';
import styles from './styles.module.scss';


class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMore: false
    };
  }

  handeClick = e => {
    e.preventDefault();

    this.setState({
      showMore: true
    });
  }

  render() {
    const { categories, className='' } = this.props;
    const { showMore } = this.state;
    const seeMoreStyles = showMore ? `${styles['see-more']} ${styles['show-more']}` : styles['see-more'];

    return (
      <section className={ `${className} ${styles.container}` }>
        <ul className={ styles.list }>
          {
            categories.map((category, i) => {
              return <Category key={ i } title={ category.title } url={ category.url } showMore={ showMore } />;
            })
          }
          <li className={ seeMoreStyles } onClick={ this.handeClick }>
            <a href="#">
              <Hx className={ styles['see-more-text'] } size="6" color={ styles.orange }>see more</Hx>
            </a>
          </li>
        </ul>
      </section>
    );
  }
};


export default Display;
