import React from 'react';

import styles from './styles.module.scss';
import imagePaths from 'Images/career-path.svg';
import imageCertification from 'Images/certification.svg';
import imageResources from 'Images/resources.svg';
import TextLink from 'Elements/TextLink';

const CareerResourcesMenu = () =>
  <section className={ styles.capsule }>

    <div className={ styles.item }>
      <div className={ styles.itemContainer }>
        <a href="/career-resources/career-paths/">
          <div className={ `${styles.iconBox} ${styles.paths}` }>
            <img className={ styles.img } src={ imagePaths } alt="paths" />
          </div>
        </a>
      </div>
      <div className={ styles.itemContainer }>
        <TextLink className={ `${styles.menuLink} ${styles.colXS12}` } to="/career-resources/career-paths/">IT Career Paths</TextLink>
      </div>
    </div>
    <div className={ styles.item }>
      <div className={ styles.itemContainer }>
        <a href="/career-resources/getting-certified/">
          <div className={ `${styles.iconBox} ${styles.paths}` }>
            <img className={ styles.img } src={ imageCertification } alt="certification" />
          </div>
        </a>
      </div>
      <div className={ styles.itemContainer }>
        <TextLink className={ styles.menuLink } to="/career-resources/getting-certified/">Getting IT Certified</TextLink>
      </div>
    </div>
    <div className={ styles.item }>
      <div className={ styles.itemContainer }>
        <a href="/career-resources/job-resources/">
          <div className={ `${styles.iconBox} ${styles.paths}` }>
            <img className={ styles.img } src={ imageResources } alt="IT resources" />
          </div>
        </a>
      </div>
      <div className={ styles.itemContainer }>
        <TextLink className={ styles.menuLink } to="/career-resources/job-resources/">IT Resources</TextLink>
      </div>
    </div>

  </section>
  ;

export default CareerResourcesMenu;
