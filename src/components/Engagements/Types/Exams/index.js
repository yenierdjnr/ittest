import React, { PureComponent } from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLink from 'Elements/TextLink';
import { IconArrowRight } from 'Elements/Icons';
import imageExams from 'Images/exams.svg';
import styles from '../styles.module.scss';


class Exams extends PureComponent {
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
          <Hx className={ styles.title } color={ styles.offBlack }>Access Virtual Labs and Practice Tests</Hx>
          <Para className={ `${styles.summary} ${styles.labs}` } color={ styles.darkGrey }>Test your skills risk-free in real-world lab environments. Take and re-take Kaplan IT Training&reg; practice tests until you're confident that you are ready to pass.</Para>
          <TextLink to="/vlabs/" className={ styles.link } color={ styles.orangePrimary }>view virtual labs</TextLink>
          <TextLink className={ styles.link } to="/practice-tests/" color={ styles.orangePrimary }>see practice tests</TextLink>
        </div>
      </div>
    );
  }
}


export default Exams;
