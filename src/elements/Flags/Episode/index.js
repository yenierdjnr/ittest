import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import { IconArrowRight } from 'Elements/Icons';


const Episode = ({ className='', title='Episode Title', linkName='001-01' }) => {
  return (
    <li className={ `${className} ${styles.container}` }>
      <Hx className={ styles.title } color={ styles.offBlack } size='4'>{ title }</Hx>
      <div className={ styles.episode }>
        <span className={ styles.name }>{ linkName }</span>
        <IconArrowRight fill={ styles.blueDark } className={ styles.icon } />
      </div>
    </li>
  );
};


export default Episode;
