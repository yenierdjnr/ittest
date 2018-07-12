import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';

const Labs = ({ name }) =>
  <div>
    <Hx className={ styles.title } color={ styles.headingColor } size="6">{ name }</Hx>
  </div>
  ;


export default Labs;
