import React from 'react';
import styles from './styles.module.scss';

import microsoftImage from 'Images/logos/microsoft@2x.png';
import ciscoImage from 'Images/logos/cisco@2x.png';
import awsImage from 'Images/logos/aws@2x.png';
import comptiaImage from 'Images/logos/comptia@2x.png';


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
