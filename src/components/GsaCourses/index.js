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
      <div className={ styles.courseList }>

        <div className={ styles.courseLevel }>
          <Para className={ styles.course } color={ styles.offBlack }>IAT Level I</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/comptia/a-901/" target="_blank" className={ styles.link }>CompTIA A+</a></Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/comptia/network-n10007/" target="_blank" className={ styles.link }>CompTIA Network+</a></Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isc2/systems-security-certified-practitioner/" target="_blank" className={ styles.link }>SSCP</a></Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/cisco/ccna-security-updated-2016/" target="_blank" className={ styles.link }>CCNA Security</a></Para>
        </div>
        <div className={ styles.courseLevel }>
          <Para className={ styles.course } color={ styles.offBlack }>IAT Level II</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/giac/gsec/" target="_blank" className={ styles.link }>GSEC</a></Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/comptia/a-security/" target="_blank" className={ styles.link }>CompTIA Security+</a></Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isc2/systems-security-certified-practitioner/" target="_blank" className={ styles.link }>SSCP</a></Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/cisco/ccna-security-updated-2016/" target="_blank" className={ styles.link }>CCNA Security</a></Para>
        </div>
        <div className={ styles.courseLevel }>
          <Para className={ styles.course } color={ styles.offBlack }>IAT Level III</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/comptia/comptia-advanced-security-practitioner-2016/" target="_blank" className={ styles.link }>CASP</a></Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isaca/cisa/" target="_blank" className={ styles.link }>CISA</a></Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isc2/certified-information-systems-security-professional-reshoot/" target="_blank" className={ styles.link }>CISSP</a> (or Associate)</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>GCIH</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>GCED</Para>
        </div>

        <div className={ styles.courseLevel }>
          <Para className={ styles.course } color={ styles.offBlack }>IAM Level I</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CAP</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>GSLC</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/comptia/a-security/" target="_blank" className={ styles.link }>CompTIA Security+</a></Para>
        </div>
        <div className={ styles.courseLevel }>
          <Para className={ styles.course } color={ styles.offBlack }>IAM Level II</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/comptia/comptia-advanced-security-practitioner-2016/" target="_blank" className={ styles.link }>CASP</a></Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CAP</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>GSLC</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isaca/cism/" target="_blank" className={ styles.link }>CISM</a></Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isc2/certified-information-systems-security-professional-reshoot/" target="_blank" className={ styles.link }>CISSP</a> (or Associate)</Para>
        </div>
        <div className={ styles.courseLevel }>
          <Para className={ styles.course } color={ styles.offBlack }>IAM Level III</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>GSLC</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isaca/cisa/" target="_blank" className={ styles.link }>CISM</a></Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isc2/certified-information-systems-security-professional-reshoot/" target="_blank" className={ styles.link }>CISSP</a> (or Associate)</Para>
        </div>

        <div className={ styles.courseLevel }>
          <Para className={ styles.course } color={ styles.offBlack }>IASAE Level I</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/comptia/comptia-advanced-security-practitioner-2016/" target="_blank" className={ styles.link }>CASP</a></Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isc2/certified-information-systems-security-professional-reshoot/" target="_blank" className={ styles.link }>CISSP</a> (or Associate)</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CSSLP</Para>
        </div>
        <div className={ styles.courseLevel }>
          <Para className={ styles.course } color={ styles.offBlack }>IASAE Level II</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/comptia/comptia-advanced-security-practitioner-2016/" target="_blank" className={ styles.link }>CASP</a></Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isc2/certified-information-systems-security-professional-reshoot/" target="_blank" className={ styles.link }>CISSP</a> (or Associate)</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CSSLP</Para>
        </div>
        <div className={ styles.courseLevel }>
          <Para className={ styles.course } color={ styles.offBlack }>IASAE Level III</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CISSP - ISSEP</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CISSP - ISSAP</Para>
        </div>

        <div className={ styles.courseLevel }>
          <Para className={ styles.course } color={ styles.offBlack }>CNDSP Analyst</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>GCIA</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/ec-council/ceh-v9/" target="_blank" className={ styles.link }>CEH</a></Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>GCIH</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>SCYBER</Para>
        </div>
        <div className={ styles.courseLevel }>
          <Para className={ `${styles.course} ${styles.small}` } color={ styles.offBlack }>CNDSP Incident Responder</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>GCIH</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CSIH</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/ec-council/ceh-v9/" target="_blank" className={ styles.link }>CEH</a></Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>GCFA</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>SCYBER</Para>
        </div>
        <div className={ styles.courseLevel }>
          <Para className={ styles.course } color={ styles.offBlack }>CNDSP Auditor</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isaca/cisa/" target="_blank" className={ styles.link }>CISA</a></Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>GSNA</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/ec-council/ceh-v9/" target="_blank" className={ styles.link }>CEH</a></Para>
        </div>
        <div className={ styles.courseLevel }>
          <Para className={ styles.course } color={ styles.offBlack }>CNDSP Manager</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }>CISSP - ISSMP</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isaca/cisa/" target="_blank" className={ styles.link }>CISM</a></Para>
        </div>
        <div className={ styles.courseLevel }>
          <Para className={ `${styles.course} ${styles.small}` } color={ styles.offBlack }>CNDSP Infrastructure Support</Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isc2/systems-security-certified-practitioner/" target="_blank" className={ styles.link }>SSCP</a></Para>
          <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/ec-council/ceh-v9/" target="_blank" className={ styles.link }>CEH</a></Para>
        </div>

      </div>
    </section>
  );
};


export default GsaCourses;
