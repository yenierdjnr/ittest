import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import habitatForHumanity from 'Images/habitat_for_humanity.png'
import foodForKids from 'Images/food_for_kids.png'
import ronaldMcDonaldHouse from 'Images/ronald_mcdonald_house.png'

const Charity = () => {
  return (
    <section className={ styles.capsule }>
      <div className={ styles.row }>
        <div className={ styles.col12 }>
          <Hx className={ styles.subtitle } color={ styles.offBlack }>ITProTV supports</Hx>
        </div>
      </div>
      <div className={ styles.listcapsule }>
        <div className={ `${styles['item']} ${styles.one}` }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <img src={ habitatForHumanity } alt="Habitat for Humanity" />
          </div>
        </div>
        <div className={ `${styles['item']} ${styles.two}` }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <img src={ foodForKids } alt="Food for Kids" />
          </div>
        </div>
        <div className={ `${styles['item']} ${styles.three}` }>
          <div className={ `${styles['logo']} ${styles.paths}` }>
            <img src={ ronaldMcDonaldHouse } alt="Ronald McDonald House" />
          </div>
        </div>
      </div>
      {/*  <div className={ styles.row }>
        <div className={ styles.colXS12 }>
          <Para className={ styles.supportsContent } color={ styles.greyDark }>A portion of the proceeds from swag purchases from the <a href="https://itprotv.myshopify.com/" target="_blank">(IT)ProShop</a> go toward funding the above charities, U.S. veterans education discounts, and expanding student education programs at ITProTV.</Para>
        </div>
      </div>*/}
    </section>
  );
};


export default Charity;
