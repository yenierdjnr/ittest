import React from 'react';
import styles from '../styles.module.scss';

import imageExams from 'Images/exams.svg'
import { IconArrowRight } from 'Elements/Icons';


const orangePrimary = '#F6621C';

const Exams = props => {
  const { className='' } = props;

  return (
    <div className={ `${className} ${styles.container}` }>
      <div className={ styles['img-box'] }>
        <img className={ styles['img-box__exams'] } src={ imageExams } alt="'exams" />
      </div>
      <div className={ styles.info }>
        <span className={ styles['sequence-num'] }>_03</span>
        <h2 className={ styles.title }>Pass Certifications with<br/>Practice Exams</h2>
        <p className={ styles.summary }>Prepare for tough certification examinations with current tests from<br/>Transcender®. Take and re-take to ensure you're ready before you sit<br/>for the exam.</p>
        <a className={ styles.link } href="/practice-tests/">
          <span>see practice tests</span>
          <IconArrowRight fill={ orangePrimary }/>
        </a>
      </div>
    </div>
  );
};


export default Exams;
