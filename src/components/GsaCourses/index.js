import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';


const GsaCourses = () =>
  <section className={ styles.capsule} >
    <div className={ styles.titleRow }>
      <div className={ styles.colXS12 }>
        <Hx size="3" className={ styles.subtitle } color={ styles.offBlack }>DoD Approved 8140 (DoDD 8570) Baseline Certifications</Hx>
      </div>
    </div>
    <div className={ styles.courseList }>
      <div className={ styles.courseLevel }>
        <Para className={ styles.course } color={ styles.offBlack }>IAT Level I</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/comptia/a-901/" className={ styles.link }>CompTIA A+</a></Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/comptia/network-2016/" className={ styles.link }>CompTIA Network+</a></Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isc2/systems-security-certified-practitioner/" className={ styles.link }>SSCP</a></Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/cisco/ccna-security-updated-2016/" className={ styles.link }>CCNA Security</a></Para>
      </div>
      <div className={ styles.courseLevel }>
        <Para className={ styles.course } color={ styles.offBlack }>IAT Level II</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/giac/gsec/" className={ styles.link }>GSEC</a></Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/comptia/security-updated-2017/" className={ styles.link }>CompTIA Security+</a></Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isc2/systems-security-certified-practitioner/" className={ styles.link }>SSCP</a></Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/cisco/ccna-security-updated-2016/" className={ styles.link }>CCNA Security</a></Para>
      </div>
      <div className={ styles.courseLevel }>
        <Para className={ styles.course } color={ styles.offBlack }>IAT Level III</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/comptia/comptia-advanced-security-practitioner-2016/" className={ styles.link }>CASP</a></Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isaca/cisa/" className={ styles.link }>CISA</a></Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isc2/certified-information-systems-security-professional-updated-2018/" className={ styles.link }>CISSP</a> (or Associate)</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }>GCIH</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }>GCED</Para>
      </div>

      <div className={ styles.courseLevel }>
        <Para className={ styles.course } color={ styles.offBlack }>IAM Level I</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }>CAP</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }>GSLC</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/comptia/security-updated-2017/" className={ styles.link }>CompTIA Security+</a></Para>
      </div>
      <div className={ styles.courseLevel }>
        <Para className={ styles.course } color={ styles.offBlack }>IAM Level II</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/comptia/comptia-advanced-security-practitioner-2016/" className={ styles.link }>CASP</a></Para>
        <Para className={ styles.courseName } color={ styles.greyDark }>CAP</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }>GSLC</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isaca/cism/" className={ styles.link }>CISM</a></Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isc2/certified-information-systems-security-professional-updated-2018/" className={ styles.link }>CISSP</a> (or Associate)</Para>
      </div>
      <div className={ styles.courseLevel }>
        <Para className={ styles.course } color={ styles.offBlack }>IAM Level III</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }>GSLC</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isaca/cisa/" className={ styles.link }>CISM</a></Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isc2/certified-information-systems-security-professional-updated-2018/" className={ styles.link }>CISSP</a> (or Associate)</Para>
      </div>

      <div className={ styles.courseLevel }>
        <Para className={ styles.course } color={ styles.offBlack }>IASAE Level I</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/comptia/comptia-advanced-security-practitioner-2016/" className={ styles.link }>CASP</a></Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isc2/certified-information-systems-security-professional-updated-2018/" className={ styles.link }>CISSP</a> (or Associate)</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }>CSSLP</Para>
      </div>
      <div className={ styles.courseLevel }>
        <Para className={ styles.course } color={ styles.offBlack }>IASAE Level II</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/comptia/comptia-advanced-security-practitioner-2016/" className={ styles.link }>CASP</a></Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isc2/certified-information-systems-security-professional-updated-2018/" className={ styles.link }>CISSP</a> (or Associate)</Para>
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
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/ec-council/ceh-v9/" className={ styles.link }>CEH</a></Para>
        <Para className={ styles.courseName } color={ styles.greyDark }>GCIH</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }>SCYBER</Para>
      </div>
      <div className={ styles.courseLevel }>
        <Para className={ `${styles.course} ${styles.small}` } color={ styles.offBlack }>CNDSP Incident Responder</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }>GCIH</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }>CSIH</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/ec-council/ceh-v9/" className={ styles.link }>CEH</a></Para>
        <Para className={ styles.courseName } color={ styles.greyDark }>GCFA</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }>SCYBER</Para>
      </div>
      <div className={ styles.courseLevel }>
        <Para className={ styles.course } color={ styles.offBlack }>CNDSP Auditor</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isaca/cisa/" className={ styles.link }>CISA</a></Para>
        <Para className={ styles.courseName } color={ styles.greyDark }>GSNA</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/ec-council/ceh-v9/" className={ styles.link }>CEH</a></Para>
      </div>
      <div className={ styles.courseLevel }>
        <Para className={ styles.course } color={ styles.offBlack }>CNDSP Manager</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }>CISSP - ISSMP</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isaca/cisa/" className={ styles.link }>CISM</a></Para>
      </div>
      <div className={ styles.courseLevel }>
        <Para className={ `${styles.course} ${styles.small}` } color={ styles.offBlack }>CNDSP Infrastructure Support</Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/isc2/systems-security-certified-practitioner/" className={ styles.link }>SSCP</a></Para>
        <Para className={ styles.courseName } color={ styles.greyDark }><a href="/courses/ec-council/ceh-v9/" className={ styles.link }>CEH</a></Para>
      </div>

    </div>
  </section>
  ;


export default GsaCourses;
