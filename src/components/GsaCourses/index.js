import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLink from 'Elements/TextLink';
import { IconExams, IconLabs } from 'Elements/Icons';


const GsaCourses = props => {
  return (
    <section className={ styles.container} >
    <Hx className={ styles.subtitle } color={ styles.offBlack }>DoD Approved 8140 (DoDD 8570) Baseline Certifications</Hx>
      <ul className={ styles.courseList }>

        <div className={ styles.courseLevel }>
          <li className={ styles.course } color={ styles.offBlack } >IAT Level I</li>
          <Para className={ styles.courseName } color={ styles.greyDark }>CompTIA A+</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CompTIA Network+</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>SSCP</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CCNA Security</Para>
        </div>
        <div className={ styles.courseLevel }>
          <li className={ styles.course } color={ styles.offBlack } >IAT Level II</li>
          <Para className={ styles.courseName } color={ styles.greyDark }>GSEC</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CompTIA Security+</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>SSCP</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CCNA Security</Para>
        </div>
        <div className={ styles.courseLevel }>
          <li className={ styles.course } color={ styles.offBlack } >IAT Level III</li>
          <Para className={ styles.courseName } color={ styles.greyDark }>CASP</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CISA</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CISSP (or Associate)</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>GCIH</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>GCED</Para>
        </div>

        <div className={ styles.courseLevel }>
          <li className={ styles.course } color={ styles.offBlack } >IAM Level I</li>
          <Para className={ styles.courseName } color={ styles.greyDark }>CAP</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>GSLC</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CompTIA Security+</Para>
        </div>
        <div className={ styles.courseLevel }>
          <li className={ styles.course } color={ styles.offBlack } >IAM Level II</li>
          <Para className={ styles.courseName } color={ styles.greyDark }>CASP</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CAP</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>GSLC</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CISM</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CISSP (or Associate)</Para>
        </div>
        <div className={ styles.courseLevel }>
          <li className={ styles.course } color={ styles.offBlack } >IAM Level III</li>
          <Para className={ styles.courseName } color={ styles.greyDark }>GSLC</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CISM</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CISSP (or Associate)</Para>
        </div>

        <div className={ styles.courseLevel }>
          <li className={ styles.course } color={ styles.offBlack } >IASAE Level I</li>
          <Para className={ styles.courseName } color={ styles.greyDark }>CASP</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CISSP (or Associate)</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CSSLP</Para>
        </div>
        <div className={ styles.courseLevel }>
          <li className={ styles.course } color={ styles.offBlack } >IASAE Level II</li>
          <Para className={ styles.courseName } color={ styles.greyDark }>CASP</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CISSP (or Associate)</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CSSLP</Para>
        </div>
        <div className={ styles.courseLevel }>
          <li className={ styles.course } color={ styles.offBlack } >IASAE Level III</li>
          <Para className={ styles.courseName } color={ styles.greyDark }>CISSP - ISSEP</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CISSP - ISSAP</Para>
        </div>

        <div className={ styles.courseLevel }>
          <li className={ styles.course } color={ styles.offBlack } >CNDSP Analyst</li>
          <Para className={ styles.courseName } color={ styles.greyDark }>GCIA</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CEH</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>GCIH</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>SCYBER</Para>
        </div>
        <div className={ styles.courseLevel }>
          <li className={ `${styles.course} ${styles.small}` } color={ styles.offBlack } >CNDSP Incident Responder</li>
          <Para className={ styles.courseName } color={ styles.greyDark }>GCIH</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CSIH</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CEH</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>GCFA</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>SCYBER</Para>
        </div>
        <div className={ styles.courseLevel }>
          <li className={ styles.course } color={ styles.offBlack } >CNDSP Auditor</li>
          <Para className={ styles.courseName } color={ styles.greyDark }>CISA</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>GSNA</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CEH</Para>
        </div>
        <div className={ styles.courseLevel }>
          <li className={ styles.course } color={ styles.offBlack } >CNDSP Manager</li>
          <Para className={ styles.courseName } color={ styles.greyDark }>CISSP - ISSMP</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CISM</Para>
        </div>
        <div className={ styles.courseLevel }>
          <li className={ `${styles.course} ${styles.small}` } color={ styles.offBlack } >CNDSP Infrastructure Support</li>
          <Para className={ styles.courseName } color={ styles.greyDark }>SCCP</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CEH</Para>
        </div>
      </ul>
    </section>
  );
};


export default GsaCourses;
