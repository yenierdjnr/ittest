import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import { IconArrowRight } from 'Elements/Icons';


const CareerPathCourses = ({ className='', title='Course Title', description='001-01', courseLength }) => {
  return (
    <li className={ `${className} ${styles.container}` }>
      <Hx className={ styles.title } color={ styles.offBlack } size='5'>{ title }</Hx>
      <div className={ styles.course }>
        <span className={ styles.name }>{ description }</span>
        <IconArrowRight fill={ styles.blueDark } className={ styles.icon } />
      </div>
    </li>
  );
};


export default CareerPathCourses;
