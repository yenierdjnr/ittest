import React, { PureComponent } from 'react';
import { withPrefix } from 'gatsby-link'

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLink from 'Elements/TextLink';
import { IconArrowRight } from 'Elements/Icons';
import imageExams from 'Images/exams.svg';
import styles from '../styles.module.scss';

export default class Exams extends PureComponent {

  componentDidMount(){
    if (typeof document !== 'undefined') {
      const scriptElem =  document.createElement('script');
      scriptElem.src = withPrefix('animations/ITP_Exams_1.hyperesources/itpexams1_hype_generated_script.js');
      document.head.appendChild(scriptElem);
    }
  }
  render() {
    const { className } = this.props;
    return (
      <div className={ `${className} ${styles.container}` }>
        <div className={ styles['img-box'] }>
          <img className={ styles['img-exams'] } src={ imageExams } alt="exams" />
          <div id="itpexams1_hype_container" className={ styles['ani-exams'] } style={{ margin:'auto', position:'relative', width:'400px',height:'400px',overflow:'hidden' }}>
          </div>
        </div>
        <div className={ styles.info }>
          <span className={ styles['sequence-num'] }>_03</span>
          <Hx className={ styles.title } color={ styles.offBlack }>Pass Certifications with Practice Exams</Hx>
          <Para className={ `${styles.summary} ${styles.exams}` } color={ styles.darkGrey }>Prepare for tough certification examinations with current tests from Kaplan IT Training®. Take and re-take to ensure you're ready before you sit  for the exam.</Para>
          <TextLink className={ styles.link } to="/practice-tests/" color={ styles.orangePrimary }>see practice tests</TextLink>
        </div>
      </div>
    );
  }
}
