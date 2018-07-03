import React from 'react';

import { OverlayNav as Nav } from 'Components/Nav';
import styles from './styles.module.scss';


const Overlay = ({ className='', callback='', pathname='' }) => 
  <div className={ styles.capsule }>
    <Nav location={ pathname } handleCloseClick={ callback }/>
  </div>
  ;


export default Overlay;
