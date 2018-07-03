import React from 'react';
import styles from './styles.module.scss';


const VendorList = (props) => 
  <section className={ styles.capsule }>
    <div className={ styles.list }>
      <div className={ styles.item }>
        <div className={ styles.vendor }>microsoft</div>
        <div className={ styles.vendor }>cisco</div>
        <div className={ styles.vendor }>AWS</div>
        <div className={ styles.vendor }>compTIA</div>
        <div className={ styles.vendor }>cloud</div>
        <div className={ styles.vendor }>security</div>
      </div>
    </div>
  </section>
  ;


export default VendorList;
