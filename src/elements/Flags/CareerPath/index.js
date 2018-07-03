import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import { IconArrowRight } from 'Elements/Icons';

const CareerPath = ({ className='', title='Episode Title', description='description', link='link' }) => {

  return (

    <div className={ styles.cols }>
      <div className={ styles.item }>
        <a href={ link }>
          <Hx className={ styles.title } color={ styles.offBlack } size='5'>{ title } <IconArrowRight fill={ styles.darkOrange } className={ styles.icon } /></Hx>
          <div className={ styles.path }>
            <span className={ styles.name }>{ description }</span>
          </div>
        </a>
      </div>
    </div>

  );
};


export default CareerPath;
