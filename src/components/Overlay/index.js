import React from 'react';

import { OverlayNav as Nav } from 'Components/Nav';
import styles from './styles.module.scss';


const Overlay = ({ className='', callback='', pathname='' }) => {
  return (
    <div className={ styles.container }>
      <Nav location={ pathname } handleCloseClick={ callback }/>
    </div>
  );
};


export default Overlay;
