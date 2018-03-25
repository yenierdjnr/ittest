import React from 'react';

import styles from './styles.module.scss';
import { Category } from 'Elements/Flags';


// const categories = ['Apple', 'Amazon', 'Cisco', 'CompTIA', 'EC Council', 'Microsoft', 'Adobe', 'DevPro', 'ISACA', '(ISC)2', 'OfficePro', 'Service/Project Mgmt.', 'Technical Skills', 'VMware'];

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
