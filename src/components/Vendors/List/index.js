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
        <img src={ microsoftImage } alt="Microsoft Logo" width="186" height="41" />
        <img src={ ciscoImage } alt="Cisco Logo" width="111" height="59" />
        <img src={ awsImage } alt="AWS Logo" width="80" height="49" />
        <img src={ comptiaImage } alt="CompTIA Logo" width="174" height="38" />
      </ul>
    </section>
  );
};


export default VendorList;
