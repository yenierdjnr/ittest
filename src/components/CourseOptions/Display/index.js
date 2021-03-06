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

  handeClick = (e) => {
    e.preventDefault();

    this.setState({
      showMore: true
    });
  }

  render() {
    const { categories, className='' } = this.props;
    const { showMore } = this.state;
    const seeMoreStyles = showMore ? `${styles.seeMore} ${styles.showMore}` : styles.seeMore;

    return (
      <section className={ `${className} ${styles.capsule}` }>
        <div className={ styles.container }>

          <div className={ styles.list }>
            {
              categories.map((category, i) => <Category key={ i } title={ category.tagname } url={`/courses/${category.url}/`} showMore={ showMore } />)
            }
            <div className={ seeMoreStyles } onClick={ this.handeClick }>
              <a href="#">
                <Hx className={ styles.seeMoreText } size="6" color={ styles.orange }>see more</Hx>
              </a>
            </div>
          </div>

        </div>
      </section>
    );
  }
}


export default Display;
