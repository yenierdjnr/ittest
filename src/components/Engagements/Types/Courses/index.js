import React from 'react';
import styles from '../styles.module.scss';

import imageCourse from 'Images/courses.svg'
import { IconArrowRight } from 'Elements/Icons';


const orangePrimary = '#F6621C';

const Courses = props => {
  const { className='' } = props;

  return (
    <div className={ `${className} ${styles.container}` }>
      <div className={ styles['img-box'] }>
        <img className={ styles['img-courses'] } src={ imageCourse } alt="courses" />
      </div>
      <div className={ styles.info }>
        <span className={ styles['sequence-num'] }>_01</span>
        <h2 className={ styles.title }>Library of Engaging Courses</h2>
        <p className={ styles.summary }>From CompTIA, Cisco, and Microsoft to Security and Cloud<br/>Fundamentals, you can learn it all. You'll watch more and learn<br/>more with the friendly faces of IT.</p>
        <a className={ styles.link } href="/courses/">
          <span>browse course library</span>
          <IconArrowRight fill={ orangePrimary }/>
        </a>
      </div>
    </div>
  );
};


export default Courses;
