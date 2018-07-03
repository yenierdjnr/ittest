import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Link from 'gatsby-link';
import { IconArrowRight } from 'Elements/Icons';


const Episode = ({ className='', title='Episode Title', linkName='001-01', url }) => 

  <div className={ styles.cols }>
    <div className={ styles.item }>
      <Link to={url} className={ `${className} ${styles.link}` }>
        <Hx className={ styles.title } color={ styles.offBlack } size='5'>{ title }</Hx>
        <div className={ styles.episode }>
          <span className={ styles.name }>{ linkName }</span>
          <IconArrowRight fill={ styles.blueDark } className={ styles.icon } />
        </div>
      </Link>
    </div>
  </div>

  ;


export default Episode;
