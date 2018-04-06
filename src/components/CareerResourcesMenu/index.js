import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import imagePaths from 'Images/career-path.svg';

const CareerResourcesMenu = props => {
  return (
    <section className={ styles.container }>
      <ul className={ styles.content }>
        <li className={ styles.item }>
          <div className={ `${styles['icon-box']} ${styles.paths}` }>
            <img className={ styles['img-paths'] } src={ imagePaths } alt="paths" />
          </div>
          <Hx className={ styles.title } size="4">IT Career Paths</Hx>
        </li>
      </ul>
    </section>
  );
};

export default CareerResourcesMenu;
