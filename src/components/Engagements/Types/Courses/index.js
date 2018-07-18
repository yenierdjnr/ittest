import React, { PureComponent } from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLink from 'Elements/TextLink';
import imageCourse from 'Images/courses.svg';
import styles from '../styles.module.scss';


class Exams extends PureComponent {
  render() {
    const { className } = this.props;

    return (
      <div className={ `${className} ${styles.capsule}` }>
        <div className={ styles.imgCols }>
          <div className={ styles.imgBox }>
            <img className={ styles.imgCourses } src={ imageCourse } alt="courses" />
          </div>
        </div>
        <div className={ styles.infoCols }>
          <div className={ styles.info }>
            <span className={ styles.sequenceNum }>_01</span>
            <Hx className={ styles.title } color={ styles.offBlack }>Learn with Engaging Courses</Hx>
            <Para className={ `${styles.summary} ${styles.courses}` } color={ styles.darkGrey }>From CompTIA, Cisco, and Microsoft to Security and Cloud Fundamentals, you can learn it all. Dive deep into one or master many with the friendly faces of IT.</Para>
            <TextLink to="/courses/" className={ styles.link } color={ styles.orangePrimary }>browse course library</TextLink>
          </div>
        </div>
      </div>
    );
  }
}


export default Exams;
