import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';


const Episode = ({ className='', title='Course Title', description='001-01' }) => {
  return (
    <li className={ `${className} ${styles.container}` }>
      <Hx className={ styles.title } color={ styles.offBlack } size='5'>{ title }</Hx>
      <div className={ styles.episode }>
        <span className={ styles.name }>{ description }</span>
      </div>
    </li>
  );
};


export default Episode;
