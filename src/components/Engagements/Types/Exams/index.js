import React from 'react';
import styles from '../styles.module.scss';

import imageExams from 'Images/exams.svg';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLink from 'Elements/TextLink';
import { IconArrowRight } from 'Elements/Icons';


const Exams = props => {
  const { className='' } = props;

  return (
    <div className={ `${className} ${styles.container}` }>
      <div className={ styles['img-box'] }>
        <img className={ styles['img-exams'] } src={ imageExams } alt="'exams" />
      </div>
      <div className={ styles.info }>
        <span className={ styles['sequence-num'] }>_03</span>
        <Hx className={ styles.title } color={ styles.offBlack }>Pass Certifications with Practice Exams</Hx>
        <Para className={ `${styles.summary} ${styles.exams}` } color={ styles.darkGrey }>Prepare for tough certification examinations with current tests from Transcender®. Take and re-take to ensure you're ready before you sit  for the exam.</Para>
        <TextLink className={ styles.link } to="/practice-tests/" color={ styles.orangePrimary }>see practice tests</TextLink>
      </div>
    </div>
  );
};


export default Exams;
