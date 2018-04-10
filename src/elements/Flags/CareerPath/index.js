import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import { IconArrowRight } from 'Elements/Icons';


const CareerPath = ({ className='', title='Episode Title', linkName='001-01' }) => {

  return (
    <li className={ styles.item }>
      <Hx className={ styles.title } color={ styles.offBlack } size='5'>{ title }</Hx>
      <div className={ styles.path }>
        <span className={ styles.name }>{ linkName }</span>
        <IconArrowRight fill={ styles.darkOrange } className={ styles.icon } />
      </div>
    </li>
  );
};


export default CareerPath;
