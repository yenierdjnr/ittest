import React, { PureComponent } from 'react';
import { withPrefix } from 'gatsby-link'

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLink from 'Elements/TextLink';
import imageExams from 'Images/exams.svg';
import styles from '../styles.module.scss';


class Exams extends PureComponent {

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
      <div className={ `${className} ${styles.capsule}` }>
        <div className={ styles.imgCols }>
          <div className={ styles.imgBox }>
            <img className={ styles.imgExams } src={ imageExams } alt="exams" />
            <div id="itpexams1_hype_container" className={styles.aniExams} style={{ margin:'auto', position:'relative', width:'300px',height:'300px' }}>
            </div>
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
