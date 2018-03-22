import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLink from 'Elements/TextLink';
import { IconArrowRight } from 'Elements/Icons';
import imageCourse from 'Images/courses.svg';
import styles from '../styles.module.scss';

const Courses = props => {
  const { className='' } = props;
  setTimeout(() => {
    var scriptElem = document.createElement('script');
    scriptElem.src = "/static/itpcontent1_hype_generated_script.js";
    document.head.appendChild(scriptElem);
  }, 0);
  return (
    <div className={ `${className} ${styles.container}` }>
      <div className={ styles['img-box'] }>
        <img className={ styles['img-courses'] } src={ imageCourse } alt="courses" />
        <div id="itpcontent1_hype_container" className={ styles['ani-courses'] } style={{ margin:'auto', position:'relative', width:'400px',height:'400px',overflow:'hidden' }}>
        </div>
      </div>
      <div className={ styles.info }>
        <span className={ styles['sequence-num'] }>_01</span>
        <Hx className={ styles.title } color={ styles.offBlack }>Library of Engaging Courses</Hx>
        <Para className={ `${styles.summary} ${styles.courses}` } color={ styles.offBlack }>From CompTIA, Cisco, and Microsoft to Security and Cloud Fundamentals, you can learn it all. New content is added daily  so you can stay current.</Para>
        <TextLink to="/courses/" className={ styles.link } color={ styles.orangePrimary }>browse course library</TextLink>
      </div>
    </div>
  );
};


export default Courses;
