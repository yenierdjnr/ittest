import React from 'react';

import styles from './styles.module.scss';
import { Category } from 'Elements/Flags';


const categories = ['Adobe', 'Apple', 'Amazon', 'Cisco', 'CompTIA', 'DevPro', 'EC Council', 'ISACA', '(ISC)2', 'Microsoft', 'Office', 'Project Management', 'Technical Skills', 'VMware'];

const Display = props => {
  const { className='' } = props;

  return (
    <section className={ `${className} ${styles.container}` }>
      <ul>
        {
          categories.map((cat, i) => {
            return <Category key={ i } title={ cat } />;
          })
        }
      </ul>
    </section>
  );
};


export default Display;
