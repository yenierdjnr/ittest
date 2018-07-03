import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLinkExternal from 'Elements/TextLinkExternal';

const Labs = ({ className='', name }) => 
  <div>
    <Hx className={ styles.title } color={ styles.headingColor } size="6">{ name }</Hx>
  </div>
  ;


export default Labs;
