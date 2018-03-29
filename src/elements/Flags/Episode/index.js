import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import { IconArrowRight } from 'Elements/Icons';


const Episode = ({ className='', title='Episode Title', linkName='001-01' }) => {
  if (className === 'search') {
    return (
      <li className={ `${styles.search} ${styles.item}` }>
        <Hx className={ styles.title } color={ styles.offBlack } size='5'>{ title }</Hx>
      </li>
    );
  }

  return (
    <li className={ styles.item }>
      <Hx className={ styles.title } color={ styles.offBlack } size='5'>{ title }</Hx>
      <div className={ styles.episode }>
        <span className={ styles.name }>{ linkName }</span>
        <IconArrowRight fill={ styles.blueDark } className={ styles.icon } />
      </div>
    </li>
  );
};


export default Episode;
