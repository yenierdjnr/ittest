import React from 'react';

import Hx from 'Elements/Hx';
import { Category } from 'Elements/Flags';
import styles from './styles.module.scss';


const Display = props => {
  const { categories, className='' } = props;

  return (
    <section className={ `${className} ${styles.container}` }>
      <ul className={ styles.list }>
        {
          categories.map((category, i) => {
            return <Category key={ i } title={ category.tagname } url={`/courses/${category.url}/`} />;
          })
        }
        <li className={ styles['see-more'] }><a href="#"><Hx className={ styles['see-more-text'] } size="6" color={ styles.orange }>see more</Hx></a></li>
      </ul>
    </section>
  );
};


export default Display;
