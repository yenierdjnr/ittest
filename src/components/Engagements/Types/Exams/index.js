import React, { PureComponent } from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLink from 'Elements/TextLink';
import imageExams from 'Images/exams.svg';
import styles from '../styles.module.scss';


class Exams extends PureComponent {
  render() {
    const { className } = this.props;

    return (
      <div className={ `${className} ${styles.capsule}` }>
        <div className={ styles.imgCols }>
          <div className={ styles.imgBox }>
            <img className={ styles.imgExams } src={ imageExams } alt="exams" />
          </div>
        </div>
        <div className={ styles.infoCols }>
          <div className={ styles.info }>
            <span className={ styles.sequenceNum }>_03</span>
            <Hx className={ styles.title } color={ styles.offBlack }>Access Virtual Labs and Practice Tests</Hx>
            <Para className={ `${styles.summary} ${styles.labs}` } color={ styles.darkGrey }>Test your skills risk-free in real-world lab environments. Take and re-take Kaplan IT Training&reg; practice tests until you're confident that you are ready to pass.</Para>
            <TextLink to="/vlabs/" className={ styles.link } color={ styles.orangePrimary }>view virtual labs</TextLink>
            <TextLink className={ styles.link } to="/practice-tests/" color={ styles.orangePrimary }>see practice tests</TextLink>
          </div>
        </div>
      </div>
    );
  }
}


export default Exams;
