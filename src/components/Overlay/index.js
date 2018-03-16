import React from 'react';

import { OverlayNav as Nav } from 'Components/Nav';
import styles from './styles.module.scss';


const Overlay = ({ className='', callback='' }) => {
  return (
    <div className={ styles.container }>
      <Nav handleCloseClick={ callback }/>
    </div>
  );
};


export default Overlay;
