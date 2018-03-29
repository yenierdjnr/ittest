import React from 'react';

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
      </ul>
    </section>
  );
};


export default Display;
