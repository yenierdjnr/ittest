import React from 'react';

import styles from './styles.module.scss';
import imagePaths from 'Images/career-path.svg';
import imageCertification from 'Images/certification.svg';
import imageResources from 'Images/resources.svg';
import TextLink from 'Elements/TextLink';

const CareerResourcesMenu = props => {
  return (
    <section className={ styles.capsule }>

        <div className={ styles.item }>
          <div className={ styles.itemRow }>
            <a href="/career-resources/career-paths/">
              <div className={ `${styles['icon-box']} ${styles.paths}` }>
                <img src={ imagePaths } alt="paths" />
              </div>
            </a>
          </div>
          <div className={ styles.itemRow }>
            <TextLink className={ `${styles['menu-link']} ${styles.colXS12}` } to="/career-resources/career-paths/">IT Career Paths</TextLink>
          </div>
        </div>
        <div className={ styles.item }>
          <div className={ styles.itemRow }>
            <a href="/career-resources/getting-certified/">
              <div className={ `${styles['icon-box']} ${styles.paths}` }>
                <img src={ imageCertification } alt="certification" />
              </div>
            </a>
          </div>
          <div className={ styles.itemRow }>
            <TextLink className={ styles['menu-link'] } to="/career-resources/getting-certified/">Getting IT Certified</TextLink>
          </div>
        </div>
        <div className={ styles.item }>
          <div className={ styles.itemRow }>
            <a href="/career-resources/job-resources/">
              <div className={ `${styles['icon-box']} ${styles.paths}` }>
                <img src={ imageResources } alt="IT resources" />
              </div>
            </a>
          </div>
          <div className={ styles.itemRow }>
            <TextLink className={ styles['menu-link'] } to="/career-resources/job-resources/">IT Resources</TextLink>
          </div>
        </div>

    </section>
  );
};

export default CareerResourcesMenu;
