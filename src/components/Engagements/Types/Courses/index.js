import React, { PureComponent } from 'react';
import { withPrefix } from 'gatsby-link'

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLink from 'Elements/TextLink';
import imageCourse from 'Images/courses.svg';
import styles from '../styles.module.scss';


export default class Exams extends PureComponent {

  componentDidMount(){
    if (typeof document !== 'undefined') {
      const scriptElem =  document.createElement('script');
      scriptElem.src = withPrefix('animations/ITP_Content_1.hyperesources/itpcontent1_hype_generated_script.js');
      document.head.appendChild(scriptElem);
    }
  }
  render() {
    const { className } = this.props;

    return (
      <div className={ `${className} ${styles.capsule}` }>
        <div className={ styles.imgCols }>
          <div className={ styles.imgBox }>
            <img className={ styles.imgCourses } src={ imageCourse } alt="courses" />
            <div id="itpcontent1_hype_container" className={ styles.aniCourses } style={{ margin:'auto', position:'relative', width:'400px',height:'400px' }}>
            </div>
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
