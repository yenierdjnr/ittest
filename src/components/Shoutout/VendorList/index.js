import React from 'react';
import styles from './styles.module.scss';


const VendorList = props => {
  return (
    <section className={ styles.container }>
      <ul className={ styles.list }>
        <li className={ styles.item }><span>microsoft</span></li>
        <li className={ styles.item }><span>cisco</span></li>
        <li className={ styles.item }><span>AWS</span></li>
        <li className={ styles.item }><span>compTIA</span></li>
      </ul>
    </section>
  );
};


export default VendorList;
