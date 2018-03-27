import React from 'react';

import { Category } from 'Elements/Flags';
import styles from './styles.module.scss';


const Display = props => {
  const { categories, className='' } = props;

  return (
    <section className={ `${className} ${styles.container}` }>
      <ul>
        {
          categories.map((category, i) => {
            return <Category key={ i } title={ category.tagname } url={`/course-library/${category.url}/`} />;
          })
        }
      </ul>
    </section>
  );
};


export default Display;
