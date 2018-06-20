import React from 'react';
import styles from './styles.module.scss';


const VendorList = props => {
  return (
    <section className={ styles.container }>
      <ul className={ styles.list }>
        <li className={ styles.item1 }><span>microsoft</span></li>
        <li className={ styles.item2 }><span>cisco</span></li>
        <li className={ styles.item3 }><span>AWS</span></li>
        <li className={ styles.item4 }><span>compTIA</span></li>
        <li className={ styles.item5 }><span>cloud</span></li>
        <li className={ styles.item6 }><span>security</span></li>
      </ul>
    </section>
  );
};


export default VendorList;
