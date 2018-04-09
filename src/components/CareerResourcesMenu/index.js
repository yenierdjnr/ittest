import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import imagePaths from 'Images/career-path.svg';
import imageCertification from 'Images/certification.svg';
import imageResources from 'Images/resources.svg';
import TextLink from 'Elements/TextLink';

const CareerResourcesMenu = props => {
  return (
    <section className={ styles.container }>
      <ul className={ styles.content }>
        <li className={ styles.item }>
        <a href="/career-resources/career-paths/">
          <div className={ `${styles['icon-box']} ${styles.paths}` }>
            <img src={ imagePaths } alt="paths" />
          </div>
          <TextLink className={ styles['menu-link'] }>IT Career Paths</TextLink>
          </a>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['icon-box']} ${styles.paths}` }>
            <img src={ imageCertification } alt="certification" />
          </div>
          <TextLink className={ styles['menu-link'] }>Getting IT Certified</TextLink>
        </li>
        <li className={ styles.item }>
          <div className={ `${styles['icon-box']} ${styles.paths}` }>
            <img src={ imageResources } alt="IT resources" />
          </div>
          <TextLink className={ styles['menu-link'] }>IT Resources</TextLink>
        </li>
      </ul>
    </section>
  );
};

export default CareerResourcesMenu;
